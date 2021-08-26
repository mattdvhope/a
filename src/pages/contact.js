import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => (
  <Layout header="Contact Us">
    <Seo title="Contact us" />
    <br/>
    <br/>
    <br/>
    <h1>Contact Us!</h1>
    <br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact