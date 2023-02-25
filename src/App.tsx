import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Offer from "./routes/Home/Offer";
import OfferDetail from "./routes/Home/OfferDetail";
import Subscription from "./routes/Home/Subscription";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Offer />} />
          <Route path="home" element={<Offer />} />
          <Route path="offer-detail" element={<OfferDetail />} />
          <Route path="subscription" element={<Subscription />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}
