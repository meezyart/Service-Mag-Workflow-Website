import React from 'react'
import {

  ArrowLink,

} from "../../styles/globalStyles"
const GetArrowLink = (link) => {
     let heroUrl = null

     if ((link && link.url) || (link && link.link)) {
       heroUrl = (
         <ArrowLink
           green
           right
           pt="1rem"
           href={link.url || link.link}
           target={link.openInNewTab ? "_blank" : ""}
         >
           {link.title}
         </ArrowLink>
       )
     } else if (link && link.internalLink) {
       heroUrl = (
         <ArrowLink
           green
           right
           pt="1rem"
           to={link.internalLink.reference.slug.current}
         >
           {link.title}
         </ArrowLink>
       )
     }
    return (
        <>
{heroUrl}
        </>
    )
}

export default GetArrowLink
