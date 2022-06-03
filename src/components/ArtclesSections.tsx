import React from 'react'
import ButtonCTA from './ButtonCTA'
import ImageArticle01 from '../assets/images/image-article-01.png'
function Articles() {
  return (
    <div className="articles-section">
      <p> <span> Articles </span> </p>
      <h2>Recent <span> Posts</span> </h2>
      <p>Take a look at our newest articles on how to eat better</p>
      <div className="article-section__container">
        <article className="article-section__card">
          <div className="article-section__img">
            <img src={ImageArticle01} alt="" />
          </div>
          <div className="article-section__content">
            <p>12 June 2022</p>
            <h3>Why isn't pizza boxed?</h3>
            <p>Why don't we box our pizza? It might seem odd at first. Almost all pizza business...</p>
            <ButtonCTA text="Read More"/>
          </div>

          <div className="article-section__img">
            <img src={ImageArticle01} alt="" />
          </div>
          <div className="article-section__content">
            <p>12 June 2022</p>
            <h3>Why isn't pizza boxed?</h3>
            <p>Why don't we box our pizza? It might seem odd at first. Almost all pizza business...</p>
            <ButtonCTA text="Read More"/>
          </div>
          

        </article>
      </div>
    </div>
  )
}

export default Articles