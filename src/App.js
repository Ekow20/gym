import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Join from "./components/Join";
import Plans from "./components/Plans";
import Programs from "./components/Programs";
import Reasons from "./components/Reasons";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="sections">
        <Hero />
        <Programs />
        <Reasons />
        <Plans />
        <Testimonials />
        <Join />
        <Footer />
      </div>
    </div>
  );
}

export default App;
