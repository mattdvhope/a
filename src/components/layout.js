import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"


const Layout = ({ children, header }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulHomePage {
            siteName
            siteDescription
            logo {
              file {
                url
              }
            }
            menus
          }
        }
      `}
      
      render={data => (
        <> {/* Note: FB Pixel is a plugin at 'gatsby-config.js' */}
          <Helmet> {/* 1. FB SDK for app (login, etc) -- VERIFY VERSION!!!!!, 2. FB domain verification */}
            <div id="fb-root"></div>
            <script async defer
              crossorigin="anonymous"
              src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v10.0&appId=611958516129057&autoLogAppEvents=1"
              nonce="PFVZXkQp"
            />
            <meta name="facebook-domain-verification" content="k80kka3b227qj11jguub5d6jzk3ycm" />
          </Helmet>

          <Header
            data={data.contentfulHomePage}
            siteTitle={data.contentfulHomePage.siteName}
            header={header}
          />
          <div>
            <main id="home">{children}</main>
          </div>
          <Footer siteName={data.contentfulHomePage.siteName} />
          <script>
            alert("Hello");
          </script>
        </>
      )}
    />
  )
};




// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//         <main>{children}</main>
//         <footer
//           style={{
//             marginTop: `2rem`,
//           }}
//         >
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.com">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
