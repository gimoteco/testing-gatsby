import React from "react"
import * as Style from "./styled"
import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Lightbulb as Light } from "@styled-icons/fa-solid/Lightbulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"

function MenuBar() {
  return (
    <Style.MenuBarWrapper>
      <Style.MenuBarGroup>
        <Style.MenuBarLink to="/" title="Voltar para Home">
          <Style.MenuBarItem>
            <Home />
          </Style.MenuBarItem>
        </Style.MenuBarLink>
        <Style.MenuBarLink to="/search/" title="Pesquisar">
          <Style.MenuBarItem>
            <Search />
          </Style.MenuBarItem>
        </Style.MenuBarLink>
      </Style.MenuBarGroup>
      <Style.MenuBarGroup>
        <Style.MenuBarItem title="Mudar o tema">
          <Light />
        </Style.MenuBarItem>
        <Style.MenuBarItem title="Mudar visualização">
          <Grid />
        </Style.MenuBarItem>
        <Style.MenuBarItem title="Ir para o top">
          <Arrow />
        </Style.MenuBarItem>
      </Style.MenuBarGroup>
    </Style.MenuBarWrapper>
  )
}

export default MenuBar
