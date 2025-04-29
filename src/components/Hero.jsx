import React from "react";
import Typewriter from 'typewriter-effect';
import heroBg from "../assets/hero-bg.jpg";


function Hero() {
  return (
<section
      style={{
        height: "100vh",
        position: "relative",
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-aos="fade-up"
    >
      {/* Capa oscura encima del fondo */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 1,
        }}
      />

      {/* Contenido encima del overlay */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          width: "90%",
          margin: "auto",
        }}
      >
      <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: "4rem" }}>Hola Rose 🌹</h1>
      <h2 style={{ marginTop: "20px" }}>
        <Typewriter
          options={{
            strings: [
              "Te conocí en Buenos Aires, viendo jugar al más grande 🇦🇷",
              "Y justo ahí, apareció alguien igual de increible, o tal vez más: vos ✨",
              "Tu forma de ser, tu valentía, y tu risa... fueron de a poco llenandome ❤️",
              "Aunque la distancia sea un impedimento, pudimos mantener algo de conexion ❤️",
              "Siempre seras alguien importante, gracias por haberme brindado tu tiempo y ver alto capitulo de la hormiga juntos ❤️",
            ],
            autoStart: true,
            loop: true,
            delay: 90, // Más rápido escribiendo
            deleteSpeed: 40, // Más rápido borrando
          }}
        />
      </h2>
      <button 
  style={{
    marginTop: "40px",
    padding: "10px 30px",
    fontSize: "1.2rem",
    borderRadius: "30px",
    border: "none",
    backgroundColor: "#ff69b4",
    color: "white",
    cursor: "pointer",
    transition: "background 0.3s",
  }}
  onClick={() => {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
  }}
>
  Ver recuerdos
</button>
</div>
    </section>
  );
}

export default Hero;
