import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function Offer() {
  return (
    <main className="dd-container">
      <div className="dd-card">
        <h1 className="dd-card-title">Página Inicial</h1>
      </div>
      <Link to={"/offer-detail"}>
        <Button text="Ver promoção" />
      </Link>
    </main>
  );
}
