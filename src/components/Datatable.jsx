import React from 'react';
import './Datatable.css';

const Datatable = () => {
  return (
    <section className="data-table-section inter-font" id="data_table">
      <div className="data-table-container">
        
        <h2 className="h2-heading">Planetary Facts at a Glance</h2>
        <p className="paragraph">
          Below is a comparative table of major planets in our solar system. The data highlights key <br />
          physical properties used by astronomers and researchers worldwide.
        </p>
        
        <h4 className="table-caption">
          Data about the planets of our solar system (Planetary facts taken from NASA)
        </h4>

        <div className="table-wrapper">
          <table className="planet-table">
            <thead>
              <tr>
                <th colSpan="2" className="header-primary"></th>
                <th className="header-primary">Name</th>
                <th className="header-primary">Mass (10 24kg)</th>
                <th className="header-primary">Diameter (km)</th>
                <th className="header-primary">Density (kg/m3)</th>
                <th className="header-primary">Gravity (m/s2)</th>
              </tr>
            </thead>
            <tbody>
              {/* Terrestrial Planets */}
              <tr>
                <th colSpan="2" rowSpan="4" className="category-cell">Terrestrial Planets</th>
                <td className="data-cell">Mercury</td>
                <td className="data-cell">0.330</td>
                <td className="data-cell">4,878</td>
                <td className="data-cell">5427</td>
                <td className="data-cell">3.7</td>
              </tr>
              <tr>
                <td className="data-cell">Venus</td>
                <td className="data-cell">0.330</td>
                <td className="data-cell">4,878</td>
                <td className="data-cell">5427</td>
                <td className="data-cell">3.7</td>
              </tr>
              <tr>
                <td className="data-cell">Earth</td>
                <td className="data-cell">0.330</td>
                <td className="data-cell">4,878</td>
                <td className="data-cell">5427</td>
                <td className="data-cell">3.7</td>
              </tr>
              <tr>
                <td className="data-cell">Mars</td>
                <td className="data-cell">0.330</td>
                <td className="data-cell">4,878</td>
                <td className="data-cell">5427</td>
                <td className="data-cell">3.7</td>
              </tr>

              {/* Jovian Planets */}
              <tr>
                <th scope="row" rowSpan="4" className="category-cell">Jovian<br />Planets</th>
                <th rowSpan="2" className="category-cell-sub">Gas Giants</th>
                <td className="data-cell">Jupiter</td>
                <td className="data-cell">0.330</td>
                <td className="data-cell">4,878</td>
                <td className="data-cell">5427</td>
                <td className="data-cell">3.7</td>
              </tr>
              <tr>
                <td className="data-cell">Saturn</td>
                <td className="data-cell">0.330</td>
                <td className="data-cell">4,878</td>
                <td className="data-cell">5427</td>
                <td className="data-cell">3.7</td>
              </tr>
              <tr>
                <th rowSpan="2" className="category-cell-sub">Ice Giants</th>
                <td className="data-cell">Uranus</td>
                <td className="data-cell">0.330</td>
                <td className="data-cell">4,878</td>
                <td className="data-cell">5427</td>
                <td className="data-cell">3.7</td>
              </tr>
              <tr>
                <td className="data-cell">Neptune</td>
                <td className="data-cell">0.330</td>
                <td className="data-cell">4,878</td>
                <td className="data-cell">5427</td>
                <td className="data-cell">3.7</td>
              </tr>

              {/* Dwarf Planets */}
              <tr>
                <th scope="row" colSpan="2" className="category-cell">Dwarf Planets</th>
                <td className="data-cell">Pluto</td>
                <td className="data-cell">0.330</td>
                <td className="data-cell">4,878</td>
                <td className="data-cell">5427</td>
                <td className="data-cell">3.7</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </section>
  );
};

export default Datatable;
