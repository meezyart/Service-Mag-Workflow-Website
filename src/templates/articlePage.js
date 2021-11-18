import React from "react"
import { graphql } from "gatsby"
import CoverTemplate from "../components/articlesTemps/cover"
import Layout from "../components/layout"
import {
  AnimatePresence,
  //  AnimateSharedLayout
} from "framer-motion"
// import GraphQLErrorList from "../components/graphql-error-list"
import Hero from "../components/articlesTemps/Hero"
import DidYouKnow from "../components/articlesTemps/DidYouKnow"
import PicContent from "../components/articlesTemps/PicContent"
import Watch from "../components/articlesTemps/Watch"
import Partnering from "../components/articlesTemps/Partnering"
import PicTopHero from "../components/articlesTemps/PicHero"
import TopOfMind from "../components/articlesTemps/TopOfMind"
import { StyledWrapper } from "../styles/globalStyles"
import { PicTitle } from "../styles/articleStyles"

const transition = {
  duration: 0.5,

  ease: [0.43, 0.13, 0.23, 0.96],
}

const layoutContainer = {
  hidden: {
    x: "100vw",
    transition,
  },
  show: {
    x: 0,
    transition: {
      ...transition,
      // when: "beforeChildren",
      // staggerChildren: 0.3,
    },
  },
  exit: {
    x: "-100vw",
    transition,
  },
}

export const query = graphql`
  query ArticleQuery($title: String) {
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
        asset {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
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

const articlePage = ({ pageContext, props, data }) => {
  console.log(
    "Check => ~ file: articlePage.js ~ line 54 ~ articlePage ~ data",
    "\n==========",
    data,
    "\n==========",
    props,
    "\n==========",
    pageContext
  )
  let pageContent = null

  if (pageContext._type === "editions") {
    // Editons
    const { _id } = data.editions || {}
    pageContent = <CoverTemplate key={_id} {...data.editions} />
  }
  if (pageContext._type === "page") {
    pageContent = (pageContext.pageSections || [])
      .filter((c) => !c.disabled)
      .map((c, i) => {
        let el = null

        switch (true) {
          case c.imageSize === "FullScreenPic":
            el = <PicContent key={c._key} {...c} />
            break
          case pageContext.pageTemplate === "Partnering Together":
            el = <Partnering key={c._key} {...pageContext} />
            break
          case c._type === "tomSection":
            el = <TopOfMind key={c._key} {...pageContext} />
            break
          case c._type === "heroSection":
            el = <Hero key={c._key} {...c }{...pageContext} />
            break
          case c._type === "dykSection":
            el = <DidYouKnow key={c._key} {...c} />
            break

          case c.imageSize === "FullScreenPicVideo":
            el = <Watch key={c._key} {...c} />
            break

          default:
            el = null
        }
        return el
      })
  }
  console.log("pageContent", pageContent)
  return (
    <Layout>
{/* <AnimatePresence> */}
        <StyledWrapper
          // variants={layoutContainer}
          // initial="hidden"
          // animate="show"
          exit="exit"
        >

          {pageContext.pageTemplate === "Read, Watch, Listen" && (
            <PicTopHero key={pageContext.pageTemplate.id} {...pageContext} />
          )}
          {pageContent}
        </StyledWrapper>
      {/* </AnimatePresence> */}
    </Layout>
  )
}

export default articlePage
