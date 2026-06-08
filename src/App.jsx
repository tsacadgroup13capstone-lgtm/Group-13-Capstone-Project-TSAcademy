import "./App.css";

import Hero from "./components/Hero";
import Header from "./components/Header";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <VideoSection />
    </div>
  );
}
export default App;
