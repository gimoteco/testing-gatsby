import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

function BlogList({ data, pageContext }) {
  const postList = data.allMarkdownRemark.edges
  const { total, currentPage } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === total
  const nextPage = `/page/${currentPage + 1}`
  const prevPage = currentPage === 2 ? "/" : `/page/${currentPage - 1}`

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            frontmatter: { background, category, date, description, title },
            fields: { slug },
            timeToRead,
          },
        }) => (
          <PostItem
            slug={slug}
            category={category}
            background={background}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}
      <Pagination
        total={total}
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
        isFirst={isFirst}
        isLast={isLast}
      />
    </Layout>
  )
}

export const query = graphql`
  query BlogList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
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
`

export default BlogList
