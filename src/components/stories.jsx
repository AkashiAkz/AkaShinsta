import React from "react";

const Stories = () => {
  const storyUsers = [
    "User1", "User2", "User3", "User4", "User5", "User6", 
    "User7", "User8", "User9", "User10", "User11", "User12", 
    "User13", "User14"
  ];

  return (
    <div
      style={{
        display: "flex",
        overflowX: "auto", // Suporte à rolagem horizontal
        WebkitOverflowScrolling: "touch", // Rolagem suave em dispositivos móveis
        padding: "10px",
        borderBottom: "1px solid #dbdbdb",
        backgroundColor: "#fff",
      }}
    >
      {storyUsers.map((user, index) => (
        <div
          key={index}
          style={{
            marginRight: "15px", // Espaçamento maior entre os stories
            textAlign: "center",
            cursor: "pointer", // Cursor de mão ao passar o mouse
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)"; // Aumenta o tamanho
            e.currentTarget.style.transition = "transform 0.2s ease"; // Animação suave
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"; // Retorna ao tamanho normal
          }}
        >
          <div
            style={{
              width: "68px",
              height: "68px",
              borderRadius: "50%",
              background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`}
              alt={user}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                border: "2px solid white", // Adiciona um pequeno espaçamento branco
                objectFit: "cover",
              }}
            />
          </div>
          <div style={{ fontSize: "12px", marginTop: "5px", color: "#555" }}>
            {user}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
