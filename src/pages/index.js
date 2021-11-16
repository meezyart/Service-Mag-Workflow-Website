import * as React from "react"
import CoverTemplate from "../components/articlesTemps/cover"
// import { Link } from "gatsby"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
export const CoverQuery = graphql`
  query CoverQuery($title: String) {
    editions: sanityEditions(title: { eq: $title }) {
      _rawSlug(resolveReferences: { maxDepth: 10 })
      title
      subtitle
      headline
      disabled
      seo: _rawOpenGraph(resolveReferences: { maxDepth: 10 })
      introText: _rawIntroText(resolveReferences: { maxDepth: 10 })
      _key
      _id
      mainImage {
        ...SanityImage
        alt
      }
      articlePages: _rawArticlePages(resolveReferences: { maxDepth: 10 })
      tocTitle
      tocList: _rawTocList(resolveReferences: { maxDepth: 10 })
      _type
    }
  }
`
const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <CoverTemplate {...data.editions} />
  </Layout>
)

export default IndexPage
