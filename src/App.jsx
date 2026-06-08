import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <ContactForm />
    </div>
  );
}
export default App;
