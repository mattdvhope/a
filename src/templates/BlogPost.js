import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import YoutubeHolder from "./YoutubeHolder"

const BlogPost = ({ data }) => {

  // To set the first video's position AFTER the DOM loaded...////
  const firstVideoRef = useRef(null)
  const [firstVideoPosition, setFirstVideoPosition] = useState(null);

  const [rerender, setRerender] = useState(); // or any state
  const [afterRender, setAfterRender] = useState();// internal state

  useEffect(() => {
    if (!afterRender) return;
    setFirstVideoPosition(firstVideoRef.current.getBoundingClientRect().top);
    setAfterRender(false);
  }, [afterRender]);

  useEffect(() => {
    setAfterRender(true); // (1) will be called after DOM rendered
    console.log(firstVideoPosition)
  }, [rerender]); // or don't set any if you want to listen to all re-render events

  if (firstVideoPosition !== null) {
    setTimeout(function(){
      window.scrollTo({
        top: firstVideoPosition,
        behavior: "smooth"
      })
    }, 1700);
  };
  /////////////////////////////////////////////////////////////////


  // Videos above and below the first video (which is arrived at via the URL)
  const slug = data.contentfulBlogs.slug;
  const [evenMoreVideos, setEvenMoreVideos] = useState(null);
  const [additionalVideos, setAdditionalVideos] = useState(null);

  useLayoutEffect(() => {
    setAdditionalVideos(() => 
      <div className="site-container blog-post">
        {data.allContentfulBlogs.edges
          .filter(edge => edge.node.slug === "i-am")
          .map(({ node }, i) => (
            <div key={i} className="container">
              <YoutubeHolder data={node} />
              <br/>
              <hr/>
              <hr/>
            </div>
          )
        )}
      </div>
    )
  }, []);

  useLayoutEffect(() => {
    setEvenMoreVideos(() =>
      <div className="site-container blog-post">
        {data.allContentfulBlogs.edges
          .filter(edge => edge.node.slug === "doubting-thomas")
          .map(({ node }, i) => (
            <div key={i} className="container">
              <YoutubeHolder data={node} />
              <br/>
              <hr/>
              <hr/>
            </div>
          )
        )}
      </div>
    )
  }, []);

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
