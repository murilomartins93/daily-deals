import "./styles.css";
import { Link } from "react-router-dom";
import PageNavLink from "../PageNavLink";

export default function MainHeader() {
  return (
    <header>
      <nav className="dd-container dd-header-nav">
        <Link to={"/"} className="dd-nav-title">Daily Deals</Link>
        <div className="dd-navlinks">
          <PageNavLink to={"/home"}>Início</PageNavLink>
          <PageNavLink to={"/offer-detail"}>Promoção</PageNavLink>
          <PageNavLink to={"/subscription"}>Participar</PageNavLink>
        </div>
      </nav>
    </header>
  );
}
