import { Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { Watches } from "./Components/Pages/Watches/Watches";
import { Brands } from "./Components/Pages/Brands/Brands";
import { ShoppingCart } from "./Components/Pages/ShoppingCart/ShoppingCart";
import { ROUTES } from "./constants";
import { Brand } from "./Components/Pages/Brand/Brand";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Watches />} />
        <Route path={ROUTES.BRANDS} element={<Brands />} />
        <Route path={ROUTES.CART} element={<ShoppingCart />} />
        <Route path={ROUTES.BRAND(":id")} element={<Brand />} />
      </Route>
    </Routes>
  );
}

export default App;
