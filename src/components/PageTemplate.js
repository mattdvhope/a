import React from "react"
import Layout from "./layout"
import Seo from "./seo"
import ContactApp from "./Contact2/ContactApp"

const PageTemplate = ({ header, title, pageType }) => {
  return (
    <Layout header={header}>
      <Seo title={title} />
      <ContactApp pageType={pageType} />
    </Layout>
  )
}

export default PageTemplate
