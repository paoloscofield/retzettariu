import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import RecipeContextComponent from "./assets/context/RecipeContextComponent";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecipeContextComponent>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecipeContextComponent>
);
