import React, { useState } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import YoutubeHolder from "./YoutubeHolder"

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <div className="container">
        <div className="site-container blog-post">
          <YoutubeHolder data={data.contentfulBlogs}/>
        </div>
      </div>
      <hr/>

      <div className="site-container blog-post" style={{ marginTop: `-6em`}} >
        {data.allContentfulBlogs.edges.map(({ node }, i) => (
          <div key={i} className="container">
            <YoutubeHolder data={node} />
            <br/>
            <hr/>
            <hr/>
          </div>
        ))}
      </div>

    </Layout>
  )
}

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogs(slug: {eq: $slug}) {
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

    contentfulHomePage {
      siteUrl
    }

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



  // return (
  //   <div className="site-container blog-post">
  //     {edges.map(({ node }, i) => (
  //       <div key={i} className="container">
  //         <YoutubeHolder data={node} />
  //         <br/>
  //         <hr/>
  //         <hr/>
  //         <br/>
  //       </div>
  //     ))}
  //   </div>
  // )