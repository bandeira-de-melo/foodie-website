import React from 'react'
import ButtonCTA from './ButtonCTA'
import '../styles/testimonials-section.css'
import Client01 from '../assets/images/img-client-01.png'
import Client02 from '../assets/images/img-client-02.png'

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-section__container">
        <div className="testimonials-section__intro">
          <p className='accent'>Costumers Testimonials</p>
          <h2>What <span> Costumers </span>Say About Us</h2>
          <p>We are happy when costumers are too</p>
          <ButtonCTA text="Read more"/>
        </div>
        <div className="testimonials-section__cards">
          <div className="testimonials-section__card">
            <div className="testimonials-section__card__img">
              <img src={Client02} alt="" />
            </div>
            <p>"Very quick and easy!"</p>
            <p className='line'>________</p>
            <h2>Kristin Watson</h2>
            <p>Luis Vuitton</p>
          </div>
          <div className="testimonials-section__card">
            <div className="testimonials-section__card__img">
              <img src={Client01} alt="" />
            </div>
            <p>"High quality service"</p>
            <p className='line'>________</p>
            <h2>Ronald Richard</h2>
            <p>Best Brands</p>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default TestimonialsSection