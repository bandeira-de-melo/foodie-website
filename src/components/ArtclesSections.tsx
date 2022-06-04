import React from 'react'
import ButtonCTA from './ButtonCTA'
import ImageArticle01 from '../assets/images/image-article-01.png'
import ImageArticle02 from '../assets/images/image-article-02.png'

import '../styles/articles-section.css'

function Articles() {
  return (
    <div className="articles-section">
      <div className="articles-section__container">
      <div className="articles-section__container-header">
        <p> <span> Articles </span> </p>
        <h2>Recent <span> Posts</span> </h2>
        <p>Take a look at our newest articles on how to eat better</p>
      </div>
      

        <article className="articles-section__card">
          <div className="articles-section__card-img">
            <img src={ImageArticle01} alt="" />
          </div>
          <div className="articles-section__content">
            <p>12 June 2022</p>
            <h3>Why isn't pizza boxed?</h3>
            <p>Why don't we box our pizza? It might seem odd at first. Almost all pizza business...</p>
            <ButtonCTA text="Read More" className="big-btn"/>
          </div>
        </article>

        <article className="articles-section__card">
          <div className="articles-section__card-img">
            <img src={ImageArticle02} alt="" />
          </div>
          <div className="articles-section__content">
            <p>10 June 2022</p>
            <h3>Best Burger Ever</h3>
            <p>Why don't we box our pizza? It might seem odd at first. Almost all pizza business...</p>
            <ButtonCTA text="Read More" className="big-btn"/>
          </div>

        </article>
      </div>
    </div>
  )
}

export default Articles