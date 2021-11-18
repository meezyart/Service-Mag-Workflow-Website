import React from 'react'
import {Link} from "gatsby"
import { EditionNavItem } from "../../styles/editionStyles"
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const MenuItem = ({ children , isActive, slug, onClick}) => {
  //
  return (
    <EditionNavItem
      onClick={onClick}
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={slug}>{children}</Link>
    </EditionNavItem>
  )
}
