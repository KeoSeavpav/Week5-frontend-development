import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const AuthorInfo = ({user}) =>
  {/*Display user.name and user.rol here */
    return(
    <div>
      <p>Name:{user.name}</p>
      <p>Role:{user.role}</p>
    </div>
    )
};
const PostHeader = ({user}) => <AuthorInfo user = {user}/>;
const PostItem = ({user}) => <PostHeader user = {user}/>;
const Feddlist = ({user}) => <PostItem user = {user}/>;
function App() {
 const [user] = useState({name:"Ronan",role:"Admin"});
 return<Feddlist user ={user}/>;

}

export default App
