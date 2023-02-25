import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function Subscription() {
  return (
    <main className="dd-container">
      <div className="dd-card">
        <h1 className="dd-card-title">Página de inscrição</h1>
      </div>
      <Link to={"/offer-detail"}>
        <Button text="Ver promoção" />
      </Link>
    </main>
  );
}
