import React from "react"
import links from "./content"
import * as Style from "./styled"

function MenuLinks() {
  return (
    <Style.MenuLinksWrapper>
      <Style.MenuLinksList>
        {links.map(link => (
          <Style.MenuLinksItem key={link.label}>
            <Style.MenuLinksLink activeClassName="active" to={link.url}>
              {link.label}
            </Style.MenuLinksLink>
          </Style.MenuLinksItem>
        ))}
      </Style.MenuLinksList>
    </Style.MenuLinksWrapper>
  )
}

export default MenuLinks
