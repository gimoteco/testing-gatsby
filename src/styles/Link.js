import { Link } from "gatsby"
import styled, { css } from "styled-components"

export const linkStyle = css`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`

export const CustomLink = styled(Link)`
  ${linkStyle}
`

export default CustomLink
