import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [list,setlist] = useState([{id:1},{id:2},{id:3}]);
 const removeItem=(id) =>{
   const newlist = list.filter(element => element.id !== id );
  setlist(newlist);
 }
  return (
    <>
      { list.map( element => (
        <div key={element.id}>
             <span>Item:{element.id}</span>
              <button onClick={ () => removeItem(element.id)}>remove</button>
        </div>
      ))}
        
    </>
  )
}

export default App
