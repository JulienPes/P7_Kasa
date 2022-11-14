import { NavLink } from "react-router-dom";
const Nav = () =>{
    return (<nav className="navbar">
  {/* */ }
<NavLink
  className={({ isActive }) => (isActive ? "nav-active nav-link" : "nav-link")}
  end="/"
  to="/"
>
  Accueil
</NavLink>
<NavLink
  className={({ isActive }) => (isActive ? "nav-active nav-link" : "nav-link")}
  end="about"
  to="/about"
>
  A Propos
</NavLink>
</nav>
)
} 

export default Nav