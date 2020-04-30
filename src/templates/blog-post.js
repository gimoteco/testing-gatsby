import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import * as Style from "../components/Post/styled"

function BlogPost({ data }) {
  const {
    markdownRemark: {
      frontmatter: { title, description, date },
      html,
      timeToRead,
    },
  } = data

  return (
    <Layout>
      <SEO title={title} />
      <Style.PostHeader>
        <Style.PostDate>
          {date} - {timeToRead} min de leitura
        </Style.PostDate>
        <Style.PostTitle>{title}</Style.PostTitle>
        <Style.PostDescription>{description}</Style.PostDescription>
      </Style.PostHeader>
      <Style.MainContent>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </Style.MainContent>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
        category
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
