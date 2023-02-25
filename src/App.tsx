import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Offer from "./routes/Offer";
import OfferDetail from "./routes/OfferDetail";
import Subscription from "./routes/Subscription";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Offer />} />
          <Route path="home" element={<Offer />} />
          <Route path="offer-detail" element={<OfferDetail />} />
        </Route>
        <Route path="subscription" element={<Subscription />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}
