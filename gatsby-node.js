/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve(`src/templates/Page.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    // Create post pages
    result.data.allMarkdownRemark.edges.forEach(( { node } ) => {
      createPage({
        path: '/' + node.frontmatter.title.toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-'),
        component: pageTemplate,
        context: {
          title: node.frontmatter.title,
        },
      })
    });

  })
};
