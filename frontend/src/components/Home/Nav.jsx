import "../../styles/Home/nav.css";

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
            <a href="">SISTEMA INVENTARIO</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
