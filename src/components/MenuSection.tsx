import Burger from '../assets/images/burger-icon.png';
import FriedChiken from '../assets/images/fried-chicken-icon.png';
import PizzaSlice from '../assets/images/pizzaslice-icon.png';
import Ramen from '../assets/images/ramen-icon.png';

import MenuHamburger01 from '../assets/images/menu-hamburger-01.png'

import '../styles/menu-section.css'

function MenuSection() {
  return (
    <section className="menu-section">
      <div className="menu-section__container">
        <h2> <span>Menu </span>That Makes You Fall in Love</h2>
        <div className="menu-section-icons-select__container">
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
          <div className="menu-section-images">
            <div className="menu-section-image">
            <img src={MenuHamburger01} alt="" />
              <div className="food-info">
                <p className='food-name'>Cheese Burger</p>
                <p className='food-price'><span>$</span>12</p>
                <a className="cta" href='#'>Order Now &gt </a>
              </div>
            </div>
            <div className="menu-section-image">
              <img src={MenuHamburger01} alt="" />
              <div className="food-info">
                <p className='food-name'>Cheese Burger</p>
                <p className='food-price'><span>$</span>12</p>
                <a className="cta" href='#'>Order Now &gt </a>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-cta">
          <a href="#">More menu &gt </a>
        </div>
      </div>
    </section>
  )
}

export default MenuSection