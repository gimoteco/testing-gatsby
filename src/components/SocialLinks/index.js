import React from "react"
import * as Style from "./styled"
import Icons from "./icons"
import links from "./content"

function SocialLinks() {
  return (
    <Style.SocialLinksWrapper>
      <Style.SocialLinksList>
        {links.map(link => {
          const Icon = Icons[link.label]
          return (
            <Style.SocialLinksItem key={link.label}>
              <Style.SocialLinksLink
                target="_blank"
                rel="noopnener norefererrer"
                title={link.label}
                href={link.url}
              >
                <Style.IconWrapper>
                  <Icon />
                </Style.IconWrapper>
              </Style.SocialLinksLink>
            </Style.SocialLinksItem>
          )
        })}
      </Style.SocialLinksList>
    </Style.SocialLinksWrapper>
  )
}

export default SocialLinks
