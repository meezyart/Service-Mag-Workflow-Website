import React, { useState, useEffect } from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from "gatsby-source-sanity"
import clientConfig from "../../../client-config"
import {
  // MainHero,
  // HeroContent,
  HeroImg,
} from "../../styles/articleStyles"
import { Link } from "gatsby"
import { Flex } from "../../styles/globalStyles"
import { NavItem, MenuTitle } from "../../styles/headerStyles"
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../../context/globalContext"



const NavMenu = ({editions},pageContext, props,data) => {
// console.log(
//   "Check => ~ file: NavMenu.js ~ line 11 ~ NavMenu ~ props,data",
//   pageContext,
//   props,
//   data,
//   editions
// )

const articlePages = editions.map((edition) => {
  const arr = []
  edition.articlePages.map((page) => {
    arr.push({ ...page, parentSlug: edition.slug.current })
  })
  // console.log(arr)
  return arr
})

// const menuData = [...Array(7)]

// console.log(menuData)
const { currentEdition, currentMenu } = useGlobalStateContext();
const [homeTitle, setHomeTitle] = useState(editions[currentEdition].title)
// console.log("Check => ~ file: NavMenu.js ~ line 44 ~ NavMenu ~ homeTitle", homeTitle)

//  useEffect((name) => {
//   console.log('name',name)
//  }, [homeTitle])

  // get home slug
  const homeSlug = editions[currentEdition].slug.current
  const homeImg = editions[currentEdition].menuImage || editions[currentEdition].mainImage
  // const homeTitle = editions[currentEdition].title
     const imageDataCover = getGatsbyImageData(
       homeImg,
       { maxWidth: 400 },
       clientConfig.sanity
     )
  return (
    <Flex center>
      <NavItem></NavItem>
      <Link to={`/${homeSlug}`}>
        <NavItem key={homeSlug}>
          <div
            className="inner"
            onMouseEnter={() =>setHomeTitle( "Cover")}
          ></div>
          <GatsbyImage
            image={imageDataCover}
            className="menuImg"
            // width={2200}
            // height={1300}
            // layout="contained"
            aspectRatio={4 / 3}
            quality={95}
            fit="cover"
            formats={["auto", "webp", "avif"]}
            alt={homeTitle}
            style={{
              marginBottom: `0`,
              gridArea: "1 / 1 ",
              height: "100%",
            }}
          />
        </NavItem>
      </Link>
      {articlePages &&
        articlePages[currentEdition].map((item, index) => {
          // console.log(
          //   "Check => ~ file: NavMenu.js ~ line 55 ~ articlePages[currentEdition].map ~ item",
          //   item
          // )
          const imageData = getGatsbyImageData(
            item.mainImage,
            { maxWidth: 200 },
            clientConfig.sanity
          )
          return (
            <Link to={`/${item.parentSlug}/${item.slug.current}/`}>
              <NavItem key={item.id}>
                <div
                  className="inner"
                  onMouseEnter={() => setHomeTitle(item.title)}
                >
                  {}
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
                  alt={item.title}
                  style={{
                    marginBottom: `0`,
                    gridArea: "1 / 1 ",
                    height: "100%",
                  }}
                />
              </NavItem>
            </Link>
          )
        })}
      <MenuTitle>{homeTitle}</MenuTitle>
    </Flex>
  )
}
export default NavMenu
