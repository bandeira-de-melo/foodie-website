import StepsImage1 from '../assets/images/steps-image-1.png'
import StepsImage2 from '../assets/images/steps-image-2.png'
import StepsImage3 from '../assets/images/steps-image-3.png'

import '../styles/steps-section.css'

function StepsSection() {
  return (
    <section className="steps-section">
      <div className="steps-section__container">
        <div className="steps">
          <div className="steps-image">
            <img src={StepsImage1} alt="" />
          </div>
          <h2>Order Your Food</h2>
          <p>It takes only 10 seconds</p>
        </div>

        <div className="steps-section__dashes">
          <p className="dashes">|</p>
          <p className="dashes">|</p>
        </div>

        <div className="steps">
          <div className="steps-image">
            <img src={StepsImage2} alt="" />
          </div>
          <h2>Delivery & Pickup</h2>
          <p>It takes only 10 seconds</p>
        </div>
        
        <div className="steps-section__dashes">
          <p className="dashes">|</p>
          <p className="dashes">|</p>
        </div>
        
        <div className="steps">
          <div className="steps-image">
            <img src={StepsImage3} alt="" />
          </div>
          <h2>Delicious Recipe</h2>
          <p>It takes only 10 seconds</p>
        </div>
      </div>
    </section>
  )
}

export default StepsSection