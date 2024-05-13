import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Products";
import NotFoundPage from "./pages/NotFoundPage";
import Headers from "./components/Headers";
import EmployeeAbout from "./pages/EmployeeAbout";
import CompanyAbout from "./pages/CompanyAbout";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="employee" element={<EmployeeAbout />} />
          <Route path="company" element={<CompanyAbout />} />
        </Route>

        <Route path="/product" element={<Product />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
