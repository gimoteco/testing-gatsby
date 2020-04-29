import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../../styles/global"
import * as Style from "./styled"
import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"

const Layout = ({ children }) => {
  return (
    <Style.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <Style.LayoutMain>{children}</Style.LayoutMain>
      <MenuBar />
    </Style.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
