import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as Style from "./styled"

function Avatar() {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "Profile.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Style.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar
