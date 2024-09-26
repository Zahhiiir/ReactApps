import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Fruits } from "./components/Fruits";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <App name="zahir" />
      <App name="theleel" />
      <App name="zaid" />
      <Fruits />
    </>
  </StrictMode>
);
