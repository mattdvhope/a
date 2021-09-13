import React, { useState, useEffect } from "react";
import { Link } from "gatsby"
import Layout from "./layout"
import Seo from "./seo"

const PageTemplate = ({ header, title, content }) => {
  const [slug, setSlug] = useState('');

  useEffect(() => {
    setSlug(window.sessionStorage.getItem('slug'));
  }, []);

  return (
  <Layout header={header}>
    <Seo title={title} />
    <div className="container">
      <hr/>
      <h1>{title}</h1>
      <h3>(โปรดยกโทษให้รูปลักษณ์ของเพจนี้ เว็บไซต์ของเราอยู่ระหว่างการปรับปรุงครั้งใหญ่ หวังว่าเราจะมีกราฟิกและสีสันที่ดีในเร็วๆนี้ ขอขอบคุณสำหรับความอดทนของคุณ! ในระหว่างนี้ โปรดไปที่<Link to={`/${slug ? slug : "eating-the-fruit"}`}>เพจฟีดวิดีโอของเรา</Link>)</h3>
      <br/>
      <h3>{content}</h3>
      <br/>
      <h2><Link to={`/${slug ? slug : "eating-the-fruit"}`}>ไปที่เพจฟีดวิดีโอ</Link></h2>
    </div>
  </Layout>
)}

export default PageTemplate