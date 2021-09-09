import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ data, header }) => {
  const [menu, setMenu] = useState(false);
  const [slug, setSlug] = useState('');

  useEffect(() => {
    setSlug(window.sessionStorage.getItem('slug'));
  }, []);

  return (
    <header className={`site-header ${menu ? "active" : ""}`}>
      <div className="container">
        <div className="header-main">
          <div className="logo">
            <Link to="/">
              {data.logo.file.url ? (
                <img src={data.logo.file.url} alt="logo" height="53vh" style={{ position: `absolute`, top: `10px` }}/>
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
                  .filter(item => item === "Contact")
                  .map(t => {
                    {/*console.log(t);*/}
                    return (
                      <li key={t} >
                        <Link to={`/contact`}>ติดต่อเรา</Link>
                      </li>
                    );
                  })}

                {data.menus
                  .filter(item => item === "About")
                  .map(t => {
                    return (
                      <li key={t} >
                        <Link to={`/about`}>เกี่ยวกับเรา</Link>
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
                .filter(item => item === "Blogs")
                .map(t => {
                  return (
                    <li key={t}>
                      <Link to={`/${slug ? slug : "eating-the-fruit"}`}>วิดีโอ</Link>
                    </li>
                  );
                })}

                {data.menus
                .filter(item => item === "Contact")
                .map(t => {
                  return (
                    <li key={t} >
                      <Link to={`/contact`}>ติดต่อเรา</Link>
                    </li>
                  );
                })}

                {data.menus
                .filter(item => item === "About")
                .map(t => {
                  return (
                    <li key={t} >
                      <Link to={`/about`}>เกี่ยวกับเรา</Link>
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
