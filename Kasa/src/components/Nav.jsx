import { NavLink } from "react-router-dom";
const Nav = () =>{
    return (<div className="linki">
<NavLink
  className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
  end="/"
  to="/"
>
  Accueil
</NavLink>
<NavLink
  className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
  end="about"
  to="/about"
>
  A Propos
</NavLink>
</div>)
} 

export default Nav