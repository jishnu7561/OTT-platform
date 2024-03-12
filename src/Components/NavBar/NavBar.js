import React from "react";
import "./NavBar.css"

function NavBar({scrolled}) {
  return (
    <div className="navbar" id={scrolled ? "nonetransp" : "transp" }>
        <div className="navLeft">
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix_Logo" />
        <ul className='navMenu' >
            <li style={{color:"white"}}>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
        </div>
        <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />
    </div>
  )
}

export default NavBar