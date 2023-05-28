import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Header/logo.svg";
function Header() {
  const portfolio = "PORTFOLIO";
  const services = "SERVICES";
  const team = "TEAM";
  return (
    <div className="header">
      <a className="header__logo-box">
        <img alt="logo" className="header__logo" src={logo}></img>
      </a>
      <div className="header__links">
        <Link className="header__links_decor" to={"/portfolio"}>
          {portfolio}
        </Link>
        <div className="header__links_lines"></div>
        <Link className="header__links_decor" to={"/"}>
          {services}
        </Link>
        <div className="header__links_lines"></div>
        <Link className="header__links_decor" to={"/team"}>
          {team}
        </Link>
      </div>
    </div>
  );
}

export default Header;
