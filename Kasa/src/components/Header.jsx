import React from 'react'
import Logo from "../assets/KasaLogo.png"
import Nav from "./Nav"



const Header = () => {
  return (
    <header id="header" className="header">
        <img src={Logo} alt="Kasa Logo" className="kasa-logo"/>
        <Nav />
    </header>
  )
}

export default Header