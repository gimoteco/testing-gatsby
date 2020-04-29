import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../../styles/global"
import * as Style from "./styled"
import Sidebar from "../Sidebar"

const Layout = ({ children }) => {
  return (
    <Style.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <Style.LayoutMain>{children}</Style.LayoutMain>
    </Style.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
