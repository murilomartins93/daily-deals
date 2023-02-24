import "./styles.css";
import { Link } from "react-router-dom";

export default function MainHeader() {
  return (
    <header>
      <nav className="dd-container dd-home-nav">
        <Link to={"/"}>Daily Deals</Link>
      </nav>
    </header>
  );
}
