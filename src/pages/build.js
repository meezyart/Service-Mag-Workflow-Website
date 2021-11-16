import * as React from "react"
import Hero from "../components/articlesTemps/Hero"
import PicContent from "../components/articlesTemps/PicContent"
import PicTopHero from "../components/articlesTemps/PicHero"
import Watch from "../components/articlesTemps/Watch"
import DidYouKnow from "../components/articlesTemps/DidYouKnow"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
const buildPage = () => (
  <Layout>
    <Hero />
    <DidYouKnow />

    <PicTopHero />
    <PicContent/>
    <PicContent right/>
    <Watch />

  </Layout>
)

export default buildPage
