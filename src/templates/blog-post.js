import React from "react"
import { graphql } from "gatsby"

function BlogPost({ data }) {
  const {
    markdownRemark: {
      frontmatter: { title, description },
      html,
    },
  } = data

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  )
}

export const query = graphql`
  query MyQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
      }
      html
    }
  }
`

export default BlogPost
