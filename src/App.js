import React from "react";
import Navbar from "./components/Navbar";
import Feed from "./components/feed";
import Stories from "./components/stories";

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fafafa",
        display: "flex",
        height: "100vh",
        width: "100%",
      }}
    >
      {/* Navbar - Fixa à esquerda */}
      <Navbar />

      {/* Container para Stories e Feed */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "200px", // Espaço reservado para a Navbar
          width: "calc(100% - 200px)", // Ajusta largura
          overflowY: "auto", // Permite scroll no feed
        }}
      >
        {/* Stories */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            borderBottom: "1px solid #dbdbdb",
            padding: "10px 0",
          }}
        >
          <Stories />
        </div>

        {/* Feed */}
        <Feed />
      </div>
    </div>
  );
}

export default App;
