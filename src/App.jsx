import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import PlanetCard from "./components/PlanetCard"; 

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <PlanetCard />
    </div>
  );
}
export default App;
