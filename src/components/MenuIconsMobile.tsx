import Burger from '../assets/images/burger-icon.png';
import FriedChiken from '../assets/images/fried-chicken-icon.png';
import PizzaSlice from '../assets/images/pizzaslice-icon.png';
import Ramen from '../assets/images/ramen-icon.png';

function MenuIconsMobile() {
  return (
    <div className="menu-section-icons">
            <div className="menu-section-icon">
              <img src={Burger} alt="" />
            </div>
            <div className="menu-section-icon">
              <img src={Ramen} alt="" />
            </div>
            <div className="menu-section-icon">
              <img src={PizzaSlice} alt="" />
            </div>
            <div className="menu-section-icon">
              <img src={FriedChiken} alt="" />
            </div>
          </div>
  )
}

export default MenuIconsMobile