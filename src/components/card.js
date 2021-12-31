import React from "react"
import { Link } from "gatsby"
import { GatsbyImage,StaticImage } from "gatsby-plugin-image"


const Card = ({ cardSrcURL, cardAlt,cardTitle, cardExcrept }) => (
  <div className="card">
    {/* <GatsbyImage image='../images/錢往新未來-1.png' alt={``} /> */}
    {/* <Img fluid={cardSrcURL}/> */}
    <Link to="/page-2/">
      <img src={cardSrcURL} alt={cardAlt}/>
    </Link>
    <h3>{cardTitle}</h3>
    <p>{cardExcrept}</p>
    <Link to="/page-2/" className='more'>
        閱讀更多
    </Link>
  </div>
)
export default Card