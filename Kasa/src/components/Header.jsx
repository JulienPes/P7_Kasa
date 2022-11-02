import React from 'react'
import Logo from "../assets/KasaLogo.png"



const Header = () => {
  return (
    <header id="header" className="header">
        <img src={Logo} alt="Kasa Logo" className="kasa-logo"/>
       
    </header>
  )
}

export default Header