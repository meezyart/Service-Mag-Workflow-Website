// import React, { useEffect } from "react"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import NavMenu from "./NavMenu"
import ArticleNav from "./ArticleNav"
import { HeaderNav, HeaderTitle } from "../../styles/headerStyles"
import { Container, Flex } from "../../styles/globalStyles"

const Header = ({ siteTitle, toggleButton, toggleMenu, editions }) => {
  // const menuData = useStaticQuery(graphql`
  //     # {
  //     #   # allEditions {
  //     #   #   nodes {
  //     #   #     slug
  //     #   #     title
  //     #   #     id
  //     #   #   }
  //     #   # }
  //     # }
  //   `)
  return (
    <HeaderNav>
      <Container fluid>
        <Flex spaceBetween centerV>
          <NavMenu editions={editions} />
          <HeaderTitle>EMPLOYEE WORKFLOWS</HeaderTitle>
          <ArticleNav />
        </Flex>
      </Container>
    </HeaderNav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
