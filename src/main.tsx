import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AlbumProvider } from "./context/album.provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AlbumProvider>
      <App />
    </AlbumProvider>
  </React.StrictMode>
);
