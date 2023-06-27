import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Watches } from "./components/Pages/Watches/Watches";
import { Brands } from "./components/Pages/Brands/Brands";
import { ShoppingCart } from "./components/Pages/ShoppingCart/ShoppingCart";
import { ROUTES } from "./constants";
import { Brand } from "./components/Pages/Brand/Brand";

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
