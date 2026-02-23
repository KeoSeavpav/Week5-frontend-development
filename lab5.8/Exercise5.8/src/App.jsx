import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [posts,setPosts] = useState([
  { id: 1, text: "Hello", isEdited: false },
    { id: 2, text: "React", isEdited: false },
    { id: 3, text: "JavaScript", isEdited: false }
 ]);
 const markAsEdited =(id) =>{
 setPosts(posts.map(post =>
      post.id === id
        ? { ...post, isEdited: true }
        : post
    ));
 }
  return (
    <>
     <div>
      <h2>Posts</h2>

      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.text}
            {post.isEdited && " (Edited)"}

            <button onClick={() => markAsEdited(post.id)}>
              Mark Edited
            </button>
          </li>
        ))}
      </ul>
    </div>
        
    </>
  )
}

export default App
