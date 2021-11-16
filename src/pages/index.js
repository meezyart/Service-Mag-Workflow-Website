import * as React from "react"
import CoverTemplate from "../components/articlesTemps/cover"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <CoverTemplate/>


  </Layout>
)

export default IndexPage
