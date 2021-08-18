import * as React from "react"
import axios from 'axios';
import { Link, graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogPost from "../templates/BlogPost"

const IndexPage = ({ data }) => (
  <Layout header="home">
    <Seo title="Home" />
    <BlogPost data={data}/>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query BlogPostsQuery {
    allContentfulBlogs {
      edges {
        node {
          id
          slug
          title
          ctaFirst
          youtubeUrl
          description {
            description
          }
          featureImage {
            fluid {
              src
            }
          }
          promptsForResponse {
            promptSlug
            promptContent {
              promptContent
            }
            buttonInvitation
          }
        }
      }
    }
  }
`;
