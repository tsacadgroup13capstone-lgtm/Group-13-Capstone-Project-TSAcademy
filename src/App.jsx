import "./App.css";

import Hero from "./components/Hero";
import Header from "./components/Header";
import PlanetCard from "./components/PlanetCard"; 
import VideoSection from "./components/VideoSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
     <VideoSection />
     <PlanetCard />
      <ContactForm />
      <Footer />
    </div>
  );
}
export default App;
