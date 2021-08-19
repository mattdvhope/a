import React, { useState, useEffect, useRef } from "react";
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
  const [pictures, setPictures] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(videosAbove, videosBelow);
console.log("rendering");
  // Set position of first video, which is arrived at via the URL suffix
  const firstVideoRef = useRef(null)
  SetFirstVideoPosition(firstVideoRef);

  // Videos above and below the first video
  const [additionalVideos, setAdditionalVideos] = SetAdditionalVideos(data);
  const [evenMoreVideos, setEvenMoreVideos] = SetEvenMoreVideos(data);


  function videosAbove() {
    fetch('https://dog.ceo/api/breeds/image/random/3')
      // post request:
      //   userid: localStorage.getItem("userid");
      // response from python: userid
      //   userid: localStorage.getItem("userid");

      .then(res => {
        if (!res.ok) {
          res.json().then(e => Promise.reject(e))
        } else {
          return res.json()
        }
      })
      .then(res => {
        setPictures([...res.message])
      })
      .catch(console.log);
  }
  
  function videosBelow() {
    fetch('https://dog.ceo/api/breeds/image/random/1')
      .then(res => {
        if (!res.ok) {
          res.json().then(e => Promise.reject(e))
        } else {
          return res.json()
        }
      })
      .then(res => {
        console.log(res)

        setPictures([...pictures, ...res.message])
        console.log([...pictures, ...res.message].length)
        setIsFetching(false);
      })
  }

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

    <ul id='list'>
      { 
        pictures.map((img, i) => {
          return (<li key={i} style={{backgroundImage: `url(${img})`, height: `400px`, width: `400px`}}/>)
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
