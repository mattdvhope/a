import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import YoutubeHolder from "./YoutubeHolder"

export default class blogPost extends Component {

  constructor(props) {
    super();
    this.state = { 
      data: props.data.contentfulBlogs,
    };
  }

  YT(data) {
    if (data.promptsForResponse) {
      return (<YoutubeHolderPrompts data={data} />)
    } else {
      return (<YoutubeHolder data={data} />)
    }
  }

  render() {
    const data = this.state.data;
    const siteurl = this.props.data.contentfulHomePage.siteUrl + "/";
    const socialConfigss = {
      site: {
        siteMetadata: { siteurl }
      },
      title: data.title,
      slug: data.slug
    };
    return (
      <Layout>
        <SEO
          title={data.title}
          videoCover={data.featureImage.fluid.src}
          keywords={[
            `สายสัมพันธ์ ความสุข`,
            `Frontend Developer`,
            `Developer`,
            `${data.title}`
          ]}
        />
        <div className="site-container blog-post">
          <div className="container">
            {this.YT(data)}
            <hr/>
          </div>
        </div>
      </Layout>
    );
  }
}

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
  }
`;
