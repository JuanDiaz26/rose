import React, { useEffect, useState } from "react";
import heroBg from "../assets/hero-bg.jpg";
import "./Hero.css";

function Hero() {
  const phrases = [
    "Te conocí en Buenos Aires, viendo jugar al más grande 🇦🇷",
    "Y justo ahí, apareció alguien igual de increíble, o tal vez más: vos ✨",
    "Tu forma de ser, tu valentía, y tu risa... fueron de a poco llenándome ❤️",
    "Aunque la distancia sea un impedimento, pudimos mantener algo de conexión ❤️",
    "Siempre serás alguien importante, gracias por haberme brindado tu tiempo ❤️",
  ];

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);

        if (letterIndex + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 1500); // Espera 1.5s antes de borrar
        }
      } else {
        setText(currentPhrase.substring(0, letterIndex - 1));
        setLetterIndex(letterIndex - 1);

        if (letterIndex === 0) {
          // 🔥 ACA EL CAMBIO 🔥
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, phraseIndex, phrases]);

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
        <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: "4rem" }}>
          Hola Rose 🌹
        </h1>

        <div className="hero-typewriter-wrapper">
          <div className="hero-typewriter-text">{text}</div>
        </div>

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
            document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
          }}
        >
          Ver recuerdos
        </button>
      </div>
    </section>
  );
}

export default Hero;
