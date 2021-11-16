import React from "react"

import { Link } from "gatsby"
import { Flex } from "../../styles/globalStyles"
import { NavItem } from "../../styles/headerStyles"
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../../context/globalContext"



const NavMenu = ({editions},pageContext, props,data) => {
console.log(
  "Check => ~ file: NavMenu.js ~ line 11 ~ NavMenu ~ props,data",
  pageContext,
  props,
  data,
  editions
)
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

  // get home slug
  const homeSlug = editions[currentEdition].slug.current

  return (
    <Flex alignTop>
      <NavItem>Home</NavItem>
<Link to={`/${homeSlug}`}>
            <NavItem key={homeSlug}>1</NavItem>
          </Link>
      {
        articlePages &&
        articlePages[currentEdition].map((item, index) => {

          return (
            <Link to={`/${item.parentSlug}/${item.slug.current}/`}>
            <NavItem key={item.id}>{index + 2}</NavItem>

          </Link>

          )
        })}
     
    </Flex>
  )
}
export default NavMenu
