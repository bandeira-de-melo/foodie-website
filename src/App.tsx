import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandsSection from "./components/BrandsSection";
import OrderSection from "./components/OrderSection";
import StepsSection from "./components/StepsSection";
import MenuSection from "./components/MenuSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Articles from "./components/ArtclesSections";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="general_container">
      <Navbar />
      <Hero />
      <BrandsSection />
      <OrderSection />
      <StepsSection />
      <MenuSection />
      <TestimonialsSection />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
