import styled from "styled-components"
import { linkStyle } from "../../styles/Link"
import media from "styled-media-query"

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;

  ${media.lessThan("large")`
    display: none;
  `}
`

export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
`

export const SocialLinksItem = styled.li``

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 1.875rem;
  height: 1.875rem;
`

export const SocialLinksLink = styled.a`
  ${linkStyle}
`
