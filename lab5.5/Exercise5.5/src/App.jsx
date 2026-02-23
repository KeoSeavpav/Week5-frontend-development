import { useState } from "react";
import "./App.css";

const DeleteBtn = ({ id, onConfirm }) => {
  return (
    <div >   
      <button onClick={() => onConfirm(id)}> Delete</button>
    </div>
  );
};
function App() {
   const handleDelete = (id) => {
      console.log("Delete user id: ",id);
     
  };
  return (
    <>
    <DeleteBtn
      id = {'002'}
      onConfirm ={handleDelete}
     />
    </>
  );
}
export default App;
