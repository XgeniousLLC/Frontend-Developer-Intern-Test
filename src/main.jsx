import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import '../bootstrap-5.3.3-dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./page/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import Products from "./page/Products.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={ <Home/> } />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
