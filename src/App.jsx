import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MasterLayout from "./pages/MasterLayout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductPreview from "./components/Products/ProductPreview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPreview />} />
          <Route path="/collections" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
