const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    query PostList {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          previous {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          node {
            frontmatter {
              background
              category
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
              description
              title
            }
            fields {
              slug
            }
            timeToRead
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          slug: node.fields.slug,
          previousPost: previous,
          nextPost: next,
        },
      })
    })
    const postsPerPage = 6
    const pages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: pages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? "/" : `/page/${index + 1}`,
        component: path.resolve("./src/templates/blog-list.js"),
        context: {
          limit: postsPerPage,
          skip: postsPerPage * index,
          total: pages,
          currentPage: index + 1,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
