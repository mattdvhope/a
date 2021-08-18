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
          {header === "home" ? (
            <div className="menu">
              <ul
                onClick={() => {
                  setMenu(false)
                }}
              >
                <li>
                  <Link to="/#home">Home</Link>
                </li>
                {data.menus
                  .filter(item => item === "About")
                  .map(t => {
                    return (
                      <li key={t} >
                        <Link to={`/#About`}>เกี่ยวกับเรา</Link>
                      </li>
                    );
                  })}
                {data.menus
                  .filter(item => item === "Blogs")
                  .map(t => {
                    return (
                      <li key={t} >
                        <Link to={`/#Blogs`}>วิดีโอ</Link>
                      </li>
                    );
                  })}

                {data.menus
                  .filter(item => item === "Contact")
                  .map(t => {
                    return (
                      <li key={t} >
                        <Link to={`/#Contact`}>Contact</Link>
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
                <li>
                  <Link to="/#home">หน้าแรก</Link>
                </li>
                {data.menus
                  .filter(item => item === "Blogs")
                  .map(t => {
                    return (
                      <li key={t}>
                        <Link to="/videos">วิดีโอ</Link>
                      </li>
                    );
                  })}
                {data.menus
                  .filter(item => item === "Photos")
                  .map(t => {
                    return (
                      <li key={t}>
                        <Link to="/photos">Photos</Link>
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
