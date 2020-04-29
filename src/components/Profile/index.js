import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Avatar from "../Avatar"
import * as Style from "./styled"
import { CustomLink } from "../../styles/Link"

function Profile() {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          author
          description
          position
          title
        }
      }
    }
  `)

  return (
    <Style.ProfileWrapper>
      <CustomLink to="/about">
        <Avatar />
        <Style.ProfileAuthor>
          {title}
          <Style.ProfilePosition>{position}</Style.ProfilePosition>
        </Style.ProfileAuthor>
      </CustomLink>
      <Style.ProfileDescription>{description}</Style.ProfileDescription>
    </Style.ProfileWrapper>
  )
}

export default Profile
