import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const PostAction = ({onlike ,onShare}) => {
  return (
    <div>
      
      <button onClick={onlike}>like</button>
      <button onClick={onShare}>Share</button>
    </div>
  )
}
function App() {
  const [like ,setlike] = useState(0);
  const[share,setshare]=useState(0);
  const action1 = ()=> setlike(like+1);
  const action2 =() => setshare(share+1);
 return(
    <>
      <div>like:{like}</div>
      <div>Share:{share}</div>
      <PostAction onlike={action1} onShare={action2} />
    </>
  )
}

export default App
