import styled from "styled-components"
import { Link } from "gatsby"
import { linkStyle } from "../../styles/Link"

export const MenuLinksWrapper = styled.nav``

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: #1fa1f2;
  }
`

export const MenuLinksLink = styled(Link)`
  ${linkStyle}
`
