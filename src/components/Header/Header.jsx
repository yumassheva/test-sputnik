import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const portfolio = "PORTFOLIO";
  const services = "SERVICES";
  const team = "TEAM";
  return (
    <div className="header">
      <a className="header__logo-box">
        <img alt='logo' className="header__logo" src="./assets/img/logo.svg"></img>
      </a>
      <div className="header__links">
        <Link to={"/portfolio"}>{portfolio}</Link>
        <Link to={"/"}>{services}</Link>
        <Link to={"/team"}>{team}</Link>
      </div>
    </div>
  );
}

export default Header;
