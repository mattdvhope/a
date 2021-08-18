import React from "react";
import { Link } from "gatsby";

const footer = ({ siteName }) => {

  const privacy = (
    <span>
      <Link to="/privacy" >
        นโยบายส่วนตัว
      </Link>
    </span>
  )

  return (
    <div style={{ padding: `20px`, background: `#333`, marginBottom: `10px`, textAlign: `center`, color: `#fff`}} id="footer">
      <div className="container">
        <span>{siteName}</span>&nbsp; | &nbsp;
        {privacy}
      </div>
    </div>
  );

}

export default footer;