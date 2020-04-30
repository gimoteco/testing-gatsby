import { Link } from "gatsby"
import styled, { css } from "styled-components"

export const linkStyle = css`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`

export const CustomLink = styled(Link)`
  ${linkStyle}
`

export default CustomLink
