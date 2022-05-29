
import Brand01 from '../assets/images/brand-1.svg'
import Brand02 from '../assets/images/brand-2.svg'
import Brand03 from '../assets/images/brand-3.svg'
import Brand04 from '../assets/images/brand-4.svg'

function BrandsSection() {
  return (
    <section className='brands-section'>
      <div className="brands-section__container">
        <div className="brands__image">
          <img src={Brand01} alt="" />
        </div>
        <div className="brands__image">
          <img src={Brand02} alt="" />
        </div>
        <div className="brands__image">
          <img src={Brand03} alt="" />
        </div>
        <div className="brands__image">
          <img src={Brand04} alt="" />
        </div>
      </div>
    </section>
  )
}

export default BrandsSection