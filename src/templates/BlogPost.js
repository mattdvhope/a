import React, { useState, useEffect, useRef } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SetInitialVideosAbove from "../components/SetInitialVideosAbove";
import SetInitialVideosBelow from "../components/SetInitialVideosBelow";
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
  const [initialVideosBelow, setInitialVideosBelow] = SetInitialVideosBelow(data); // below

  // 3. Set infinite scrolling functionality
  const [pictures, setPictures] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(elementsFromScrolling);
  
  function elementsFromScrolling() {
    fetch('https://dog.ceo/api/breeds/image/random/1')
      .then(res => {
        return HandleResponse(res);
      })
      .then(res => {
        setPictures([...pictures, ...res.message])
        setIsFetching(false);
      })
      .catch(console.log);
  }

  return (
    <Layout>

      <ul id='list'>
        { 
          pictures.map((img, i) => {
            return (<li key={i} style={{backgroundImage: `url(${img})`, height: `290px`, width: `290px`}}/>)
          })
        }
      </ul>

      {initialVideosAbove}
      <hr/>
      <div className="container" ref={firstVideoRef}>
        <div className="site-container blog-post">
          <YoutubeHolder data={data.contentfulBlogs}/>
        </div>
      </div>
      <hr/>
      {initialVideosBelow}

      <ul id='list'>
        { 
          pictures.map((img, i) => {
            return (<li key={i} style={{backgroundImage: `url(${img})`, height: `290px`, width: `290px`}}/>)
          })
        }
      </ul>


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
