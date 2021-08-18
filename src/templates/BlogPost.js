import React, { Component } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import YoutubeHolder from "./YoutubeHolder"

const BlogPost = ({data}) => {
  const { edges } = data.allContentfulBlogs;
  
  return (
    <div className="site-container blog-post">
      {edges.map(({ node }, i) => (
        <div key={i} className="container">
          <YoutubeHolder data={node} />
          <hr/>
        </div>
      ))}
    </div>
  )

}

export default BlogPost;