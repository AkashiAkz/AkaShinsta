import React from "react";

const Post = ({ post, profile }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        marginBottom: "30px",
        overflow: "hidden",
      }}
    >
      {/* Imagem do Post */}
      <img
        src={post.image}
        alt={post.caption}
        style={{
          width: "100%",
          height: "auto",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      />

      {/* Informações do Post */}
      <div style={{ padding: "10px 15px" }}>
        {/* Perfil do Usuário */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundImage: `url(${profile.photo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <h3
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#333",
              margin: 0,
            }}
          >
            {profile.username}
          </h3>
        </div>

        {/* Legenda do Post */}
        <p
          style={{
            fontSize: "14px",
            color: "#333",
            marginTop: "8px",
            marginBottom: "10px",
          }}
        >
          {post.caption}
        </p>

        {/* Reações: Curtir e Comentar */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Curtir */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: "18px", color: "#0095f6" }}>❤️</span>
            <span style={{ fontSize: "14px", color: "#333" }}>Curtir</span>
          </div>

          {/* Comentar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: "18px", color: "#999" }}>💬</span>
            <span style={{ fontSize: "14px", color: "#333" }}>Comentar</span>
          </div>
        </div>

        {/* Data de publicação */}
        <p
          style={{
            fontSize: "12px",
            color: "#999",
            marginTop: "15px",
            marginBottom: "0",
          }}
        >
          2 horas atrás
        </p>
      </div>
    </div>
  );
};

export default Post;
