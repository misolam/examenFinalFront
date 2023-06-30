import { Link } from "react-router-dom";
import "./module.css";
import { useContext } from "react";
import { ThemeDataContext } from "../contexts/ThemeDataContext";

function Navbar() {
  const { toggleTheme } = useContext(ThemeDataContext);

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="nav-link">
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/destacados" className="nav-link">
              Destacados
            </Link>
          </li>
        </ul>
        <button onClick={toggleTheme}>cambiar tema </button>
      </nav>
    </>
  );
}
export default Navbar;
