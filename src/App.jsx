import "./App.css";

import Hero from "./components/Hero";
import Header from "./components/Header";
import PlanetCard from "./components/PlanetCard"; 
import VideoSection from "./components/VideoSection";
import ContactForm from "./components/ContactForm";
function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
     <VideoSection />
     <PlanetCard />
      <ContactForm />
    </div>
  );
}
export default App;
