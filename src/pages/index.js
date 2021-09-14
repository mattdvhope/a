import * as React from "react"
import { Link, graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import PageTemplate from "../components/PageTemplate";

const IndexPage = () => (
  <Layout header="Home">
    <Seo title="Home" />
  </Layout>
)

export default IndexPage;