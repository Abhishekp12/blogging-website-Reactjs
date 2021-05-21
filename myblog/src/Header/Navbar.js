import React from 'react'
import './Navbar.css' ;
import {Link} from 'react-router-dom';


const Navbar = () => {

    return (
       <div className="containerr-fluid">
<nav className="navbar navbar-expand-lg navbar-dark  bg-primary">
  <Link className="navbar-brand" to="/"><img src="./assests/ninja.png" alt="nijalogo" /><span className="text-normal  fs-6 p-2"> 
  Ninja Blogger </span></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse ext-right nav justify-content-end" id="navbarSupportedContent">
    <ul className="navbar-nav mr-2">
      <li className="nav-item ">
        <Link className="nav-link  text-white text-normal " to="/">HOME </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-normal  " to="/create-post">CREATE POST</Link>
      </li>
     
      
    </ul>
    
  </div>
</nav>
          

       </div>
    )
}  

export default Navbar
