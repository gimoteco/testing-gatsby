import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <Link to="/about">About</Link>
  </Layout>
)

export default IndexPage
