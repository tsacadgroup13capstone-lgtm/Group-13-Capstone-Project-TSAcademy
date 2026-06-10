import "./App.css";

import Hero from "./components/Hero";
import Header from "./components/Header";
import VideoSection from "./components/VideoSection";
import ContactForm from "./components/ContactForm";
import Datatable from "./components/Datatable";
import PlanetSection from "./components/PlanetCard"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <VideoSection />
      <PlanetSection />
      <Datatable />   
     <ContactForm />
    <Footer />
    </div>
  );
}
export default App;
