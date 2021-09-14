import * as React from "react"
import { Link, graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import PageTemplate from "../components/PageTemplate";

const IndexPage = () => (
  <PageTemplate
    header="home"
    title="home"
    pageType="about"
  />
)

export default IndexPage;