import "../../styles/Home/nav.css";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="header">
      <nav className="navigation-bar">
        <ul className="menu">
          <li className="logo">GM</li>
          <li>
            <a href="">INICIO</a>
          </li>
          <li>
            <a href="">QUIENES SOMOS</a>
          </li>
          <li>
            <a href="">CONTACTO</a>
          </li>
        </ul>

        <ul className="inicio-sistema">
          <li>
            <Link to="/login">Sistema Inventario</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
