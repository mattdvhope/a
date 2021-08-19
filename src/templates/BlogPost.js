import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import YoutubeHolder from "./YoutubeHolder"
import SetFirstVideoPosition from "../utils/SetFirstVideoPosition";
import SetAdditionalVideos from "../components/SetAdditionalVideos";
import SetEvenMoreVideos from "../components/SetEvenMoreVideos";

const BlogPost = ({ data }) => {

  const firstVideoRef = useRef(null)
  SetFirstVideoPosition(firstVideoRef)

  // Videos above and below the first video (which is arrived at via the URL)
  const slug = data.contentfulBlogs.slug;
  const [additionalVideos, setAdditionalVideos] = SetAdditionalVideos(data);
  const [evenMoreVideos, setEvenMoreVideos] = SetEvenMoreVideos(data);

  return (
    <Layout>
      {evenMoreVideos}
      <hr/>
      <div className="container" ref={firstVideoRef}>
        <div className="site-container blog-post">
          <YoutubeHolder data={data.contentfulBlogs}/>
        </div>
      </div>
      <hr/>
      {additionalVideos}
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
