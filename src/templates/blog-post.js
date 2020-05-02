import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import * as Style from "../components/Post/styled"
import RecommendedPosts from "../components/RecommendedPosts"
import Comments from "../components/Comments"

function BlogPost({ data, pageContext: { nextPost, previousPost } }) {
  const {
    markdownRemark: {
      frontmatter: { title, description, date, image },
      html,
      timeToRead,
      fields: { slug },
    },
  } = data

  return (
    <Layout>
      <SEO title={title} image={image} />
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
      <RecommendedPosts next={nextPost} previous={previousPost} />
      <Comments url={slug} title={title} />
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
        image
      }
      fields {
        slug
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
