import React, { useState } from "react";
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ data, header }) => {
  const [menu, setMenu] = useState(false);

  return (
    <header className={`site-header ${menu ? "active" : ""}`}>
      <div className="container">
        <div className="header-main">
          <div className="logo">
            <Link to="/">
              {data.logo.file.url ? (
                <img src={data.logo.file.url} alt="logo" height="53vh" style={{ position: `absolute`, top: `6px` }}/>
              ) : (
                <span>{data.siteName}</span>
              )}
            </Link>
          </div>
          <div
            className="responsive-menu"
            onClick={() => {
              setMenu(!menu)
            }}
          >
            <span></span>
          </div>
          {header === "feed" ? (
            <div className="menu">
              <ul
                onClick={() => {
                  setMenu(false)
                }}
              >

                {data.menus
                  .filter(item => item === "About")
                  .map(t => {
                    return (
                      <li key={t} >
                        <Link to={`/about`}>About</Link>
                      </li>
                    );
                  })}

                {data.menus
                  .filter(item => item === "Contact")
                  .map(t => {
                    return (
                      <li key={t} >
                        <Link to={`/contact`}>Contact Us</Link>
                      </li>
                    );
                  })}

              </ul>
            </div>
          ) : (
            <div className="menu">
              <ul
                onClick={() => {
                  setMenu(false)
                }}
              >

                {data.menus
                .filter(item => item === "About")
                .map(t => {
                  return (
                    <li key={t} >
                      <Link to={`/about`}>About</Link>
                    </li>
                  );
                })}

                {data.menus
                .filter(item => item === "Contact")
                .map(t => {
                  return (
                    <li key={t} >
                      <Link to={`/contact`}>Contact Us</Link>
                    </li>
                  );
                })}

                {data.menus
                .filter(item => item === "Blogs")
                .map(t => {
                  return (
                    <li key={t}>
                      <Link to={`/${window.sessionStorage.getItem('slug')}`}>วิดีโอ</Link> {/*change this link suffix*/}
                    </li>
                  );
                })}

              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
