import React from 'react'
import Logo from "../assets/KasaLogo.png"
import Nav from "./Nav"



const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header-container">
        <img src={Logo} alt="Kasa Logo" className="kasa-logo"/>
        <Nav />
      </div>
    </header>
  )
}

export default Header