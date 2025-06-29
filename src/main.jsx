import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SearchProvider } from "./contexts/SearchContext.jsx";
import "./i18n.js";
import { StorageProvider } from "./contexts/StorageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StorageProvider>
    <SearchProvider>
        <App />
    </SearchProvider>
    </StorageProvider>
  </React.StrictMode>
);
