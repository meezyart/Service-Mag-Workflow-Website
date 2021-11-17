import React, { useState } from "react"
// Context

import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from "gatsby-source-sanity"
import clientConfig from "../../../client-config"
import {
  // MainHero,
  // HeroContent,
  HeroImg,

} from "../../styles/articleStyles"
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../../context/globalContext"

// import  useWindowSize  from "../hooks/useWindowSize"
import {
  MainMenu,
  EditionWrapper,
  EditionNav,
  EditionInner,
  TabNav,
} from "../../styles/editionStyles"
import { Container, Flex } from "../../styles/globalStyles"
import { MenuItem } from "./menuItem"

const transition = {
  duration: 0.3,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const menuSlide = {
  open: {
    x: 0,
    scale: 1,
    originY: 0,
    originX: 0,
    // clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      duration: 0.3,
      // delay: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  closed: {
    x: "-100%",
    scale: 0,
    originY: 0,
    originX: 0,

    // clipPath: "circle(0px at 20px 20px)",
    transition: {
      duration: 0.5,
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const variants = {
  open: {
    transition: { delay: 0.7, staggerChildren: 0.05, delayChildren: 0.01 },
  },
  closed: {
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
}

const types = ["Edition", "Pages"]
const EditionMenu = ({ isActive, editions }) => {
  // const [currentMenu, setCurrentMenu] = useState(types[0])
  // const [currentEdition, setCurrentEdition] = useState(0)
  const [currentPage, setCurrentPage] = useState(editions[0].articlePages[0])
  const dispatch = useGlobalDispatchContext()
  const { currentEdition, currentMenu } = useGlobalStateContext()
  console.log(
    // editions.articlePages[0],
    'currentEdition',currentEdition,
    'currentMenu',currentMenu,
    editions
  )
  const articlePages = editions.map((edition) => {
    const arr = []
    edition.articlePages.map((page) => {
      arr.push({...page,parentSlug: edition.slug.current})
    })
    // console.log(arr)
    return arr
  })

   const handleMenuClick = (name) => {
     console.log(name)
     dispatch({ type: "SET_MENU", currentMenu: name })
     // setCurrentMenu(types[index])
   }

  const handleEditionClick = (index) => {
    dispatch({ type: "SET_EDITION", currentEdition: index })
    dispatch({ type: "SET_MENU", currentMenu: types[1] })
    // setCurrentMenu(types[1])
    // setCurrentEdition(index)

  }

  const handlePageClick = (index) => {
    console.log("Page Clecick")
  }


  //  const size = useWindowSize()
  return (
    <MainMenu
      variants={menuSlide}
      //   custom={size.height}
      initial={{ x: "-100%" }}
      animate={isActive ? "open" : "closed"}
      transition={transition}
    >
      <Container>
        <Flex center>
          <EditionInner>
            <EditionNav>
              <Flex>
                {types.map((type, index) => (
                  <TabNav
                    key={type}
                    active={currentMenu === type}
                    onClick={() => handleMenuClick(type)}
                  >
                    {type}
                  </TabNav>
                ))}
              </Flex>
            </EditionNav>
            <EditionWrapper variants={variants}>
              {currentMenu &&
                currentMenu === "Edition" &&
                editions &&
                editions.map((edition, index) => {
 console.log(
   "Check => ~ file: EditionMenu.js ~ line 158 ~ articlePages[currentEdition].map ~ edition",
   edition.mainImage
 )
 const imageData = getGatsbyImageData(
   edition.mainImage.asset,
   { maxWidth: 600 },
   clientConfig.sanity
 )
return(
                  <MenuItem
                    slug={`/${edition.slug.current}/`}
                    key={index}
                    onClick={() => handleEditionClick(index)}
                  >
                    <div className="inner">
                      <h4>{edition.title}</h4>
                    </div>
                    <GatsbyImage
                      image={imageData}
                      className="menuImg"
                      // width={2200}
                      // height={1300}
                      // layout="contained"
                      aspectRatio={16 / 9}
                      quality={95}
                      fit="cover"
                      formats={["auto", "webp", "avif"]}
                      alt={edition.title}
                      style={{
                        marginBottom: `0`,
                        gridArea: "1 / 1 ",
                        height: "100%",
                      }}
                    />
                  </MenuItem>)
})}
              {currentMenu &&
                currentMenu === "Pages" &&
                articlePages &&
                articlePages[currentEdition].map((page, index) => {

                  const imageData = getGatsbyImageData(
                    page.mainImage,
                    { maxWidth: 600 },
                    clientConfig.sanity
                  )

                  return (
                    <MenuItem
                      key={index}
                      slug={`/${page.parentSlug}/${page.slug.current}/`}
                      onClick={() => handlePageClick(index)}
                    >
                      <div className="inner">
                        <h4>{page.title}</h4>
                      </div>
                      <GatsbyImage
                        image={imageData}
                        className="menuImg"
                        // width={2200}
                        // height={1300}
                        // layout="contained"
                        aspectRatio={16 / 9}
                        quality={95}
                        fit="cover"
                        formats={["auto", "webp", "avif"]}
                        alt="A Gatsby astronaut"
                        style={{
                          marginBottom: `0`,
                          gridArea: "1 / 1 ",
                          height: "100%",
                        }}
                      />
                    </MenuItem>
                  )
                })}
            </EditionWrapper>
          </EditionInner>
        </Flex>
      </Container>
    </MainMenu>
  )
}

export default EditionMenu
