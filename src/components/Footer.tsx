import Logo from "../assets/images/foodies-logo.svg"
import icon01 from "../assets/images/icon-facebook.png"
import icon02 from "../assets/images/icon-twitter.png"
import icon03 from "../assets/images/icon-instagram.png"

import '../styles/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__company-info">
          <div className="footer-logo">
            <img src={Logo} alt="" />
          </div>
          <p>Fudiess is a fast food delivery service</p>
          <p>______________</p>
          
        </div>
        
        <div className="footer__item">
          <h3 className="footer__item-title">Page</h3>
          <a href="" className="one">Product</a>
          <a href="" className="two">Career</a>
          <a href="" className="three">FAQ</a>
          <a href="" className="four">Blog</a>

        </div>
        <div className="footer__icons-container">
            <div className="footer__icon">
              <a href="#"><img src={icon01} /></a> 
            </div>
            <div className="footer__icon">
              <a href="#"><img src={icon02} /></a> 
            </div>
            <div className="footer__icon">
              <a href="#"><img src={icon03} /></a> 
            </div>
        </div>
        <div className="footer__item">
          <h3 className="footer__item-title">Our Service</h3>
          <a href="" className="one">Transaction</a>
          <a href="" className="two">Help Center</a>
          <a href="" className="three">Delivery</a>
        </div>
        <div className="footer__adress">
          <h3 className="footer__adress-title">Visit Us</h3>
          <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer