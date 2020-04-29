import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as Style from "./styled"

function Avatar() {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "Profile.jpeg" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Style.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar
