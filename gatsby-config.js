/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `First Gatsby Site with GraphQl`,
    description: `The Description`
  },

  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `oz7n958hgdfa`,
        accessToken: `juzJIbRPUiLesBLGfg5tx69h_mGTczaShlPt15IbfYk`
      },
    },
    `gatsby-plugin-sass`
  ],
}
