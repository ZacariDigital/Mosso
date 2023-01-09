import React from 'react'

const NavBar = ()=>{
    return(
  <nav>
  <div className="nav-wrapper black">
    <a href="#" className="brand-logo left">Logo</a>
    <ul id="nav-mobile" className="right">
      <li><a href="">Login</a></li>
      <li><a href="collapsible.html">Signup</a></li>
    </ul>
  </div>
</nav>
      
    )
}

export default NavBar
//https://materializecss.com/navbar.html