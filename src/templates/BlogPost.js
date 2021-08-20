import React, { useState, useEffect, useRef } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SetInitialVideosAbove from "../components/SetInitialVideosAbove";
import SetInitialVideosBelow from "../components/SetInitialVideosBelow";
import SetMoreVideosAbove from "../components/SetMoreVideosAbove";
import SetMoreVideosBelow from "../components/SetMoreVideosBelow";
import YoutubeHolder from "./YoutubeHolder"
import SetFirstVideoPosition from "../utils/SetFirstVideoPosition";
import useInfiniteScroll from "../utils/useInfiniteScroll"; // custom Hook
import { HandleResponse } from "../utils/HandleResponse";

const BlogPost = ({ data }) => {

  // 1. Set position of first video, which is arrived at via the URL suffix & auto-scrolled to from the top of 'initialVideosAbove'
  const firstVideoRef = useRef(null)
  SetFirstVideoPosition(firstVideoRef);

  // 2. Set initial videos above and below the first video
  const [initialVideosAbove, setInitialVideosAbove] = SetInitialVideosAbove(data);
  const [initialVideosBelow, setInitialVideosBelow] = SetInitialVideosBelow(data);

  // 3. Set infinite scrolling functionality
  const [isFetching, setIsFetching] = useInfiniteScroll(elementsFromScrolling);
  const [moreVideosAbove, setMoreVideosAbove] = SetMoreVideosAbove(data);
  const [moreVideosBelow, setMoreVideosBelow] = SetMoreVideosBelow(data);
  
  const [moreVidsAbv, setMoreVidsAbv] = useState(null);
  const [moreVidsBlw, setMoreVidsBlw] = useState(null);
  
  function elementsFromScrolling() {
    setMoreVidsAbv(moreVideosAbove)
    setMoreVidsBlw(moreVideosBelow)
    setIsFetching(false);
  }

  return (
    <Layout>
      {moreVidsAbv}
      {initialVideosAbove}
      <hr/>
      <div className="container" ref={firstVideoRef}>
        <div className="site-container blog-post">
          <YoutubeHolder data={data.contentfulBlogs}/>
        </div>
      </div>
      <hr/>
      {initialVideosBelow}
      {moreVidsBlw}
    </Layout>
  )
}

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogs(slug: {eq: $slug}) {
      id
      title
      slug
      order
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
          title
          slug
          order
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
