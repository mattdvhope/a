import * as React from "react"
import { Link, graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout header="home">
    <Seo title="Home" />
  </Layout>
)

export default IndexPage