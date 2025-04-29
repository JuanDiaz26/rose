import React from "react";

function MessageForm() {
  return (
    <section
      style={{
        height: "100vh",
        background: "#f8e1e1", // Color suave y cálido
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        textAlign: "center",
        fontFamily: "'Roboto', sans-serif", // Fuente bonita
        color: "#333",
        borderRadius: "15px",
        boxShadow: "0 8px 12px rgba(0, 0, 0, 0.1)",
      }}
      data-aos="fade-up"
    >
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "80px" }}>
        🎶 Una canción que siempre me recuerda a ti... 💖
      </h2>
      <p style={{ fontSize: "1.2rem", marginBottom: "40px", color: "#666" }}>
        Fue una de las canciones que siempre escuchaba <br />
        cada vez que te extrañaba...
      </p>
      
      <audio
        controls
        style={{
          marginTop: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "80%", // Mejor tamaño para el móvil y escritorio
          maxWidth: "600px",
        }}
      >
        <source src={require('../assets/nuncaloolvides.mp3')} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      
      <p
        style={{
          marginTop: "20px",
          fontSize: "1rem",
          color: "#444",
          fontStyle: "italic",
        }}
      >
        "Cada canción tiene una historia dicen" 💕
      </p>
    </section>
  );
}

export default MessageForm;
