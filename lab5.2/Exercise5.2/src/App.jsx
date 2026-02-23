import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const Layout = ({children}) => {
  return(
    <div className= " app-container">
      <nav>Navbar</nav>
      {/*Task: Place Children here */}
      {children}
      <footer>Footer</footer>

    </div>
  );
}
function App() {
 const [add,setadd] = useState(0)

  return (
    <>
     <Layout>
     <p>hello</p>
     <div>{add}</div>
     <button onClick= {() => setadd(add+1)}>add</button>
     <button onClick= {() => setadd(add-1)}>sub</button>
     </Layout>
    </>
  )
}

export default App
