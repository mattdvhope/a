import * as React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.css";
import Helmet from "react-helmet";

import Header from "./header"
import Footer from "./footer";
import "./layout.css"
import "../css/style.css";

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
      {/* <Footer siteName={data.contentfulHomePage.siteName} />  */}

    <script
      key="fun_javascript"
      dangerouslySetInnerHTML={{ __html: `
        window.fbAsyncInit = function() {
          window.FB.init({
            xfbml            : ${true},
            version          : 'v11.0'
          });
        };

console.log("inside code");
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      `,
      }}
    />,
    <div class="fb-customerchat"
      attribution="page_inbox"
      page_id="106619367753772">
    </div>


        </>
      )}
    />
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
