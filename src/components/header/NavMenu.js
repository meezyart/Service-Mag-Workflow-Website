import React, { useState, useEffect } from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from "gatsby-source-sanity"
import clientConfig from "../../../client-config"
import { HeroImg } from "../../styles/articleStyles"
import { Link } from "gatsby"
import { Flex } from "../../styles/globalStyles"
import { NavItem, MenuTitle } from "../../styles/headerStyles"
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../../context/globalContext"

const NavMenu = ({ editions }, pageContext, props, data) => {
  const articlePages = editions.map((edition) => {
    const arr = []
    edition.articlePages.map((page) => {
      arr.push({ ...page, parentSlug: edition.slug.current })
    })
    return arr
  })

  const { currentEdition, currentMenu } = useGlobalStateContext()
  const [homeTitle, setHomeTitle] = useState(editions[currentEdition].title)

  // get home slug
  const homeSlug = editions[currentEdition].slug.current
  const homeImg =
    editions[currentEdition].menuImage || editions[currentEdition].mainImage
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
            onMouseEnter={() => setHomeTitle("Cover")}
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
