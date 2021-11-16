// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
})

const clientConfig = require("./client-config")

const isProd = process.env.NODE_ENV === "production"

console.log(process.env.SANITY_READ_TOKEN)

module.exports = {
  siteMetadata: {
    title: `Service Now Workflow Digital Magazine`,
    description: `We're excited to present this new digital magazine designed to provide key information and resources to help you on your journey as a ServiceNow customer.`,
    author: `@meezyart`,
    siteUrl: `http://servicenowemployeeworkflows.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        // Sanity project info (required)
        ...clientConfig.sanity,
      },
    },
    "babel-plugin-styled-components",
    "gatsby-plugin-styled-components",
    // "gatsby-plugin-mui-emotion",

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
