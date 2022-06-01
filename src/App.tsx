import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandsSection from "./components/BrandsSection";
import OrderSection from "./components/OrderSection";
import StepsSection from "./components/StepsSection";


function App() {
  return (
    <div className="general_container">
      <Navbar />
      <Hero />
      <BrandsSection />
      <OrderSection />
      <StepsSection />
    </div>
  );
}

export default App;
