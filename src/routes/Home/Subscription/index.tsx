import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function Subscription() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <main className="dd-container">
      <div className="dd-card">
        <h1 className="dd-card-title">Página de inscrição</h1>
        <div>
          <h4>Número de promoções resgatadas: {count}</h4>
        </div>
      </div>
      <Link to={"/offer-detail"}>
        <Button text="Ver promoção" />
      </Link>
      <button className="dd-btn" onClick={handleClick}>Resgatar</button>
    </main>
  );
}
