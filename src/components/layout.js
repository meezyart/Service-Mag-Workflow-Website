import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
//Styled Components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

import Header from "./header"

// Context
import {
  useGlobalStateContext,
  // useGlobalDispatchContext,
} from "../context/globalContext"


const GlobalStyle = createGlobalStyle`
${normalize}
* {
  text-decoration: none;

}
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;


}
body {
  font-size: 16px;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background:  ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  overscroll-behavior: none;
  overflow-x: hidden;
}
`


const Layout = ({ children }) => {
  const{ currentTheme} = useGlobalStateContext()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [toggleMenu, setToggleMenu] = useState(false)


  const darkTheme = {
    background: "#000",
    text: "#fff",
    // left: `${hamburgerPosition.x}px`,
    // top: `${hamburgerPosition.y}px`,
  }

  const lightTheme = {
    background: "#f5f5f5",
    text: "#000",
    // left: `${hamburgerPosition.x}px`,
    // top: `${hamburgerPosition.y}px`,
  }

  // const onCursor = (cursorType) => {
  //   cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
  //   dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  // }
  return (
      <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
