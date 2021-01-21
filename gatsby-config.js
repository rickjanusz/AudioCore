module.exports = {
  siteMetadata: {
    title: "AudioCore",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "W9PK5n486bvwAt9QAl3-6grFUMhhfjuQkKPUpfKfgzI",
        spaceId: "wiwdvp2ps0r9",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
