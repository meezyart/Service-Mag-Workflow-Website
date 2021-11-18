import { Link } from "gatsby"
import React from "react"
import Figure from "./partials/Figure"
import { ArrowLink } from "../styles/globalStyles"

const serializers = {
  marks: {
    internalLink: ({ mark, children }) => {
      const { slug = {}, link = {}, url, openInNewTab, isArrow, newTab } = mark
      const href = `/${slug.current}`
        if (isArrow) {
        return (

          <ArrowLink
            green
            right
            href={href || url || link}
            target={openInNewTab || newTab ? "_blank" : ""}
          >
            {children}
          </ArrowLink>
        )
      } else {
      return (
        <Link
          href={href}
          target={(openInNewTab || newTab) ? "_blank" : ""}
        >
          {children}
        </Link>

      )
      }
    },
    link: ({ mark, children }) => {
      const { link = {}, url, href, isArrow,openInNewTab, newTab } = mark
      if (isArrow) {
        return (

          <ArrowLink
            green
            right
            href={href || url || link}
            target={(openInNewTab || newTab) ? "_blank" : ""}
          >
            {children}
          </ArrowLink>
        )
      } else {
        return (
          <Link
            href={href || url || link}
            target={openInNewTab || newTab ? "_blank" : ""}
          >
            {children}
          </Link>
        )
      }
    },
  },
  types: {
    internalLink: ({ markDefs, children }) => {
      const { slug = {}, link = {}, url, openInNewTab, newTab } = markDefs
      const href = `/${slug.current}`
      return (
        <Link
          href={href}
          target={openInNewTab || newTab ? "_blank" : ""}
        >
          {children}
        </Link>
      )
    },
    link: ({ markDefs, children }) => {
      const { link = {}, url, href, isArrow, openInNewTab, newTab } = markDefs
      if (isArrow) {
        return (
          <ArrowLink
            green
            href={href || url || link}
            target={openInNewTab || newTab ? "_blank" : ""}
          >
            {children}
          </ArrowLink>
        )
      }
      return (
        <Link
          href={href || url || link}
          target={openInNewTab || newTab ? "_blank" : ""}
        >
          {children}
        </Link>
      )
    },
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
  },
}

export default serializers
