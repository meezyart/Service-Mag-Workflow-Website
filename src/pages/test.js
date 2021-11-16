import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopOfMind from "../components/articlesTemps/TopOfMind"




const TestPage = () =>  {


  return (
    <Layout>
      <Seo title="Home" />
      <TopOfMind />
    </Layout>
  )
}

export default TestPage;
