import React from "react";
import "./Hero.css";
import planetImage from "../../assets/planet.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Explore Our Solar System Through Data</h1>

            <p>
              Understand the planets not just by name, but by measurable facts.
              From size and mass to gravity and density, this page breaks down
              the solar system in a clear, data-driven way.
            </p>

            <div className="hero-buttons">
              <a href="#data" className="hero-btn primary-btn">
                Explore the Data
              </a>

              <a href="#contact" className="hero-btn secondary-btn">
                Contact Us
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="planet-glow"></div>
            <img src={planetImage} alt="Blue planet" className="hero-planet" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
