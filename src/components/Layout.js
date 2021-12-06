import React, { useState, useCallback } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
//Styled Components
// import { ThemeProvider } from "styled-components"
// import { normalize } from "styled-normalize"
import { HamburgerCollapse } from "react-animated-burgers"
import { motion, AnimatePresence } from "framer-motion"
// import {

//   //  AnimateSharedLayout
// } from "framer-motion
import {
  // StyledFullScreenWrapper,
  // StyledWrapper,
  GlobalStyle,
} from "../styles/globalStyles"
import { Typography } from "../styles/Typography"

import Header from "./header/Header"
import EditionMenu from "./editionMenu/EditionMenu"

// Context
// import {
//   useGlobalStateContext,
//   // useGlobalDispatchContext,
// } from "../context/globalContext"

const Layout = ({ children, title }) => {
  // const { currentTheme } = useGlobalStateContext()
  const menuData = useStaticQuery(graphql`
    query MenuQuery {
      allSanityEditions {
        nodes {
          _key
          includeInSitemap
          title
          menuImage: _rawMenuImage(resolveReferences: { maxDepth: 10 })
          mainImage: _rawMainImage(resolveReferences: { maxDepth: 10 })
          articlePages {
            _key
            mainImage: _rawMenuPhoto(resolveReferences: { maxDepth: 10 })
            slug {
              current
            }
            title
            pageTemplate
          }
          slug {
            current
          }
          headline
        }
      }
    }
  `)

  const [isActive, setIsActive] = useState(false)

  // const [toggleMenu, setToggleMenu] = useState(false)
  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    []
  )

  // const darkTheme = {
  //   background: "#000",
  //   text: "#fff",
  //   // left: `${hamburgerPosition.x}px`,
  //   // top: `${hamburgerPosition.y}px`,
  // }

  // const lightTheme = {
  //   background: "#f5f5f5",
  //   text: "#000",
  //   // left: `${hamburgerPosition.x}px`,
  //   // top: `${hamburgerPosition.y}px`,
  // }

  const Hamburger = {
    position: "fixed",
    backgroundColor: "#4B5D5D",
    fontSize: ".8rem",
    width: "55px",
    height: "55px",
    zIndex: "200",
  }

  const transition = {
    duration: 0.3,

    ease: [0.43, 0.13, 0.23, 0.96],
  }

  const layoutContainer = {
    hidden: {
      x: "-100vw",
      transition,
    },
    show: {
      x: 0,
      transition,
    },
    exit: {
      x: "-100vw",
      transition,
    },
  }

  // Edition Data
  const editions = menuData.allSanityEditions.nodes

  return (
    <main>
      <Typography />
      <GlobalStyle />

      <HamburgerCollapse
        barColor="white"
        buttonWidth={25}
        buttonStyle={Hamburger}
        {...{ isActive, toggleButton }}
      />
      <EditionMenu isActive={isActive} editions={editions} key={title} />
      <Header editions={editions} />
      <motion.div
        variants={layoutContainer}
        initial="hidden"
        animate="show"
        exit="exit"
        key={title}
      >
        {children}
      </motion.div>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
