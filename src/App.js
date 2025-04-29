import React from "react";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import MessageForm from './components/MessageForm';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duración de las animaciones en ms
      once: true,     // Para que se anime solo una vez al bajar
    });
  }, []);

  return (
    <div className="App">
      <Hero />
      <Gallery />
      <MessageForm />
    </div>
  );
}


export default App;
