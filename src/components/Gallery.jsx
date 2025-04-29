import React from 'react';
import 'aos/dist/aos.css'; // si aún no importaste AOS
import AOS from 'aos';
import { useEffect } from 'react';
import image1 from '../assets/image1.JPG'; 
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.JPG';
import image4 from '../assets/image4.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css';


const Gallery = () => { 
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id='gallery' className="d-flex flex-column align-items-center py-5" style={{ backgroundColor: "pink", height: "90vh" }}>
      {/* Texto arriba del carrousel */}
      <div
  className="mb-4"
  style={{
    fontFamily: 'cursive',
    fontSize: '30px',
    color: '#fff',
    backgroundColor: '#e91e63',
    width: "90%",
    margin: "auto",
    textAlign: "center",
    fontWeight: "600",
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  }}
  onMouseEnter={e => e.target.style.backgroundColor = '#d81b60'}
  onMouseLeave={e => e.target.style.backgroundColor = '#e91e63'}
>
  <div className="gallery-typewriter-wrapper">
    <div className="gallery-typewriter-texts">
      <span>Algunos recuerditos juntos ✨</span>
    </div>
  </div>
</div>

      {/* Carrousel más chico */}
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ width: '85%', margin: "auto"}}>
        <div className="carousel-inner rounded-4 shadow">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="Image 1" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="Image 2" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="Image 3" />
          </div>
          <div className="carousel-item">
            <img src={image4} className="d-block w-100" alt="Image 4" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Gallery;

