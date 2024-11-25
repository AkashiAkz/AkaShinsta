import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        width: "200px",
        height: "100vh",
        backgroundColor: "#ffffff",
        borderRight: "1px solid #dbdbdb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 0",
        position: "fixed", // Fixa à esquerda
      }}
    >
      <h1 style={{ fontSize: "18px", marginBottom: "30px", color: "#333" }}>
        AkaShinsta
      </h1>
      <nav style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <a href="#" style={linkStyle}>
          🏠 Home
        </a>
        <a href="#" style={linkStyle}>
          🔍 Pesquisar
        </a>
        <a href="#" style={linkStyle}>
          ❤️ Favoritos
        </a>
        <a href="#" style={linkStyle}>
          👤 Perfil
        </a>
      </nav>
    </div>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontSize: "16px",
  fontWeight: "bold",
  transition: "color 0.2s",
  padding: "10px",
  borderRadius: "8px",
};

export default Navbar;
