module.exports = {
  siteMetadata: {
    title: `Fahim Ahmed`,
    siteUrl: `https://www.fahimcodez.com`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-root-import",
    "gatsby-plugin-anchor-links",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 250,
      },
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/gatsby-icon.png",
        background_color: "#282828",
      },
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
