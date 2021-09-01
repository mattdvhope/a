import * as React from "react"
import loadable from '@loadable/component'
import { Link, graphql } from "gatsby";
import Layout from "../components/layout"

const SEO = loadable(() => import('../components/seo'));

const IndexPage = () => (
  <Layout header="home">
    <SEO title="Home" />
  </Layout>
)

export default IndexPage