import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const PosrImage =({url}) => {
  //Task: if url is null,Show a gray div .if url exits.show img.
  if(!url){
    return <div className="img-wrapper " style={{background:"gray" , width:"200px",height:"200px"}}> </div>
  }
  return <div className="img-wrapper">
    <img src={url} alt="img" />
  </div>
};
function App() {
  const image = "download.jpg";
  return (
    <>
     <PosrImage  />
    </>
  )
}

export default App
