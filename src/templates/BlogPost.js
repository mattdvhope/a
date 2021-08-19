import React, { useRef } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SetAdditionalVideos from "../components/SetAdditionalVideos";
import SetEvenMoreVideos from "../components/SetEvenMoreVideos";
import YoutubeHolder from "./YoutubeHolder"
import SetFirstVideoPosition from "../utils/SetFirstVideoPosition";
import useInfiniteScroll from "../utils/useInfiniteScroll"; // custom Hook

const BlogPost = ({ data }) => {

  // Set infinite scrolling
  const firstVideoRef = useRef(null)
  SetFirstVideoPosition(firstVideoRef)

  // Set infinite scrolling
  // const [isFetching, setIsFetching] = useInfiniteScroll(getData, getMoreData);

  // Videos streamed above and below the first video: which is arrived at via the URL
  const [additionalVideos, setAdditionalVideos] = SetAdditionalVideos(data);
  const [evenMoreVideos, setEvenMoreVideos] = SetEvenMoreVideos(data);

  return (
    <Layout>
      {additionalVideos}
      <hr/>
      <div className="container" ref={firstVideoRef}>
        <div className="site-container blog-post">
          <YoutubeHolder data={data.contentfulBlogs}/>
        </div>
      </div>
      <hr/>
      {evenMoreVideos}
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
