import { useState, useEffect } from "react";
import "./PlanetCard.css";

function PlanetCard({ planet, distanceFromSun, image }) {
  return (
    <div className="planet-card" id="data">
      <img src={image} alt={planet} className="planet-img" />
      <div className="planet-info">
        <p className="planet-name">{planet}</p>
        <p className="planet-distance">{distanceFromSun} million km from Sun</p>
      </div>
    </div>
  );
}

export default function PlanetSection() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://anurella.github.io/json/planets.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setPlanets(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="planet-status">Loading planets...</p>;
  if (error) return <p className="planet-status">Error: {error}</p>;

  return (
    <section className="planet-section">
      <div className="planet-section-header">
        <h2 className="planet-section-title">
          Visualizing the Differences Between Planets
        </h2>
        <p className="planet-section-subtitle">
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestrial
          planets are from gas giants and ice giants.
        </p>
      </div>

      <div className="planet-grid">
        {planets.map((p) => (
          <PlanetCard key={p.planet} {...p} />
        ))}
      </div>
    </section>
  );
}