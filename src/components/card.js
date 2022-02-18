import React from "react"
import { Link } from "gatsby"
import { GatsbyImage,StaticImage } from "gatsby-plugin-image"


const Card = ({ cardLink, cardSrcURL, cardAlt,cardTitle, cardExcrept }) => (
  <div className="card">
    {/* <GatsbyImage image='../images/錢往新未來-1.png' alt={``} /> */}
    {/* <Img fluid={cardSrcURL}/> */}
    <a href={cardLink} target='_blank'>
      <img src={cardSrcURL} alt={cardAlt}/>
    </a>
    <h3>{cardTitle}</h3>
    <p>{cardExcrept}</p>
    <a href={cardLink} className='more' target='_blank'>
        閱讀更多
    </a>
  </div>
)
export default Card