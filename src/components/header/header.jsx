import logo from "../../img/main-logo.svg";

const Header = () => (
  <header className="header">
    <nav className="header__nav wrapper">
      <a className="header__logo-link" href="#" title="Перейти на главную">
        <img className="header__logo-image" src={logo} alt="Avto-Moto" width="134" height="55" />
      </a>
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <a className="header__nav-link" href="#">Автомобили</a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#">Контакты</a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#">Услуги</a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#">Вакансии</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
