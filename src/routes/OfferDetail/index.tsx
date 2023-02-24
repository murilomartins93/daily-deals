import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function OfferDetail() {
  return (
    <main className="dd-container">
      <div className="dd-card">
        <h1 className="dd-card-title">Página de promoção</h1>
      </div>
      <Link to={"/subscription"}>
        <Button text="Quero participar" />
      </Link>
    </main>
  );
}
