import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useState, useEffect } from 'react';


// const Header = ({ siteTitle }) => (
//   <header className="fixed-header">
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.5rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="https://www.skfh.com.tw/"
//           style={{
//             color: `white`,
//             fontSize: '1rem',
//             letterSpacing: '3px',
//             textDecoration: `none`,
//           }}
//         >
//           <StaticImage
//             src="../images/skb-logo.png"
//             width={200}
//             quality={95}
//             formats={["auto", "webp", "avif"]}
//             alt="SKB LOGO"
//             style={{ 
//               marginRight: '1.5rem',
//             }}
//             className='logo'
//           />
//           {siteTitle}
//         </Link>
//       </h1>
//       <a
//           // href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fctkpro.github.io%2Fskb-gatsby%2F&display=popup&ref=plugin&src=share_button"
//           href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.skbank.com.tw%2Fcampaign%2Fnewfuture%2Findex.html&amp;src=sdkpreparse"
//           className='fab fa-facebook'
//           target='blank'
//           style={{
//             color: `white`,
//             fontSize: '1.25rem',
//             textDecoration: `none`,
//           }}
//         ></a>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header


export default function Header({ siteTitle }) {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", function(){
        setFixed(this.scrollY > 0);
      });
    }
  }, []);
  
  return (
    <header className={fixed ? 'sticky-header' : ''}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.5rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="https://www.skbank.com.tw/"
          style={{
            color: `white`,
            fontSize: '1rem',
            letterSpacing: '3px',
            textDecoration: `none`,
          }}
        >
          <StaticImage
            src="../images/skb-logo.png"
            width={200}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="SKB LOGO"
            style={{ 
              marginRight: '1.5rem',
            }}
            className='logo'
          />
          {siteTitle}
        </Link>
      </h1>
      <a
          // href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fctkpro.github.io%2Fskb-gatsby%2F&display=popup&ref=plugin&src=share_button"
          href="https://www.facebook.com/SKBankTaiwan/"
          className='fab fa-facebook'
          target='blank'
          style={{
            color: `white`,
            fontSize: '1.25rem',
            textDecoration: `none`,
          }}
        ></a>
    </div>
  </header>
  );
}