import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../App'
const NavBar = ()=>{
  const{state} = useContext(UserContext)
  const renderList = ()=>{
    if(state){
      return[
        <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/findsong">Find Song</Link></li>

      ]

    }else{
      return [
        <li><Link to="/login">Login</Link></li>,
        <li><Link to="/signup">Signup</Link></li>,
        <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/findsong">Find Song</Link></li>

      ]

    }
  }
  return(
  <nav>
  <div className="nav-wrapper black">
    <Link to={"/home"}className="brand-logo left">Mosso</Link>
    <ul id="nav-mobile" className="right">
      {renderList()}

    </ul>
  </div>
</nav>
      
    )
}

export default NavBar
