require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { spaceId, accessToken } = process.env;

module.exports = {
  siteMetadata: {
    title: `Relationships Thailand`,
    description: `เราได้สร้างพื้นที่เว็บสำหรับผู้ที่ต้องการเรียนรู้เพิ่มเติมเกี่ยวกับพระเยซูคริสต์`,
    author: `Bangkok Media Team`,
    siteUrl: `https://relationshipsthailand.org/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-KDJH1FJ4VY", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: `@hutsoninc/gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '222946198915072',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matt Malone`,
        short_name: `Matt`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-birds.png`, // This is the favicon.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
