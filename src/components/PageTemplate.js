import React, { useState, useEffect } from "react";
import { Link } from "gatsby"
import Layout from "./layout"
import Seo from "./seo"
import ContactApp from "./Contact/ContactApp"

const PageTemplate = ({ header, title, pageType }) => {
  const [slug, setSlug] = useState('');

  useEffect(() => {
    setSlug(window.sessionStorage.getItem('slug'));
  }, []);

  return (
  <Layout header={header}>
    <Seo title={title} />
    <ContactApp pageType={pageType} />
  </Layout>
  )

}

export default PageTemplate