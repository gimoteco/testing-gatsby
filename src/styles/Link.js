import styled, { css } from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const linkStyle = css`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`

export const CustomLink = styled(AniLink)`
  ${linkStyle}
`

export default CustomLink
