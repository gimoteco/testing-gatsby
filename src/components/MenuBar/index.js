import React, { useState, useEffect } from "react"
import * as Style from "./styled"
import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Lightbulb as Light } from "@styled-icons/fa-solid/Lightbulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { ThList as List } from "@styled-icons/typicons/ThList"

function MenuBar() {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)

    setDisplay(window.__display)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  const isDark = theme === "dark"
  const isList = display === "list"

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
        <Style.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDark ? "light" : "dark")
          }}
          className={theme}
        >
          <Light />
        </Style.MenuBarItem>
        <Style.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isList ? "grid" : "list")
          }}
        >
          {isList ? <Grid /> : <List />}
        </Style.MenuBarItem>
        <Style.MenuBarItem title="Ir para o top">
          <Arrow />
        </Style.MenuBarItem>
      </Style.MenuBarGroup>
    </Style.MenuBarWrapper>
  )
}

export default MenuBar
