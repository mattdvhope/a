import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout header="About us">
    <Seo title="เกี่ยวกับเรา" />
    <br/>
    <br/>
    <br/>
    <h1>เกี่ยวกับเรา</h1>
    <br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About