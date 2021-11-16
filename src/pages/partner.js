import * as React from "react"
// import CoverTemplate from "../components/articlesTemps/cover"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Partnering from "../components/articlesTemps/Partnering"

const PartnerPage = () => (
  <Layout>
    <Seo title="Home" />
    <Partnering />
  </Layout>
)

export default PartnerPage
