/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `The Great Gatsby Restuaraunt`,
    description: `Now Serving Leonardo Dicaprio`
  },

  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `oz7n958hgdfa`,
        accessToken: `juzJIbRPUiLesBLGfg5tx69h_mGTczaShlPt15IbfYk`
      },
    },

    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Abril Fatface`,
        ],
      },
    }
  ],
}
