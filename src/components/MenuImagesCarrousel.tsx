import MenuHamburger01 from '../assets/images/menu-hamburger-01.png';

function MenuImagesCarrousel() {
  return (
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
  )
}

export default MenuImagesCarrousel