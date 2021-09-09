import * as React from "react"
import { Link, graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"

// import LogoApp from "../components/Logo/LogoApp";
import MenuApp from "../components/Menu/MenuApp";


// const IndexPage = () => (
//   <Layout header="home">
//     <Seo title="Home" />
//   </Layout>
// )

const IndexPage = () => (
  <MenuApp/>
)


export default IndexPage;