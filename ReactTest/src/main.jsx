import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProductList from "./components/ProductList";
import App from "./App.jsx";
// import Fruits from "./components/Fruits.jsx";
// import Add from "./components/Add.jsx";
// import Header from "./components/Header.jsx";
import Greet from "./components/Greet";
// import List from "./components/List";
import Users from "./components/Users";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greet />
    <Users />
    <ProductList />
    <App />
  </StrictMode>
);
