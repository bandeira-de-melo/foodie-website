import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandsSection from "./components/BrandsSection";
import OrderSection from "./components/OrderSection";


function App() {
  return (
    <div className="general_container">
      <Navbar />
      <Hero />
      <BrandsSection />
      <OrderSection />
    </div>
  );
}

export default App;
