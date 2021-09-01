import * as React from "react"
import loadable from '@loadable/component'
import { Link } from "gatsby"
import Layout from "../components/layout"

const SEO = loadable(() => import('../components/seo'));

const About = () => (
  <Layout header="About us">
    <SEO title="About us" />
    <br/>
    <br/>
    <br/>
    <h1>About Us!</h1>
    <br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About