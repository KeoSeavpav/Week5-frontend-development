import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [search,setSearch] = useState("");
  const items = ["React","JavaScript","Tailwind"];
  const searchitem = items.filter(element =>element.toLowerCase().includes(search.toLowerCase())) 
  return (
    <>
    <div>
       <h2>search</h2>
       <input type="text" 
        placeholder='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
    </div>
      <ul>
        {searchitem.map((items,index) =>(
          <li key={index} >{items}</li>
        ))};
      </ul>
    </>
  )
}

export default App
