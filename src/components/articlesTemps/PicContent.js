import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from "gatsby-source-sanity"
import clientConfig from "../../../client-config"
import PortableText from "../partials/portableText"

import {
  PicHero,
  PicContentOverlay,
  SideContent,
  PicImg,
  PicTitle,
  PicText,
} from "../../styles/articleStyles"
import { ArrowLink, } from "../../styles/globalStyles"

const PicContent = ({
  right,
  mainImage,
  contentLocation,
  topTextCta,
  heading,
  mainContent,
  sideSecBlurb,
  sideSecCta,
  sideSecHeading,
}) => {
  const imageData = getGatsbyImageData(
    mainImage.asset,
    { maxWidth: 3000 },
    clientConfig.sanity
  )
  // console.log(right)
  return (
    <PicHero right={contentLocation === "right"}>
      <PicImg>
        <GatsbyImage
          image={imageData}
          // width={2200}
          // height={1300}
          layout="fullWidth"
          aspectRatio={22 / 15}
          quality={95}
          fit="cover"
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `0`, gridArea: "1 / 1 ", height: "100%" }}
        />
      </PicImg>
      <PicContentOverlay right={contentLocation === "right"}>
        <div className="picContentWrapper">
          <PicTitle>{sideSecHeading}</PicTitle>

          <PicText>
            <h1>{heading}</h1>
            <h3>
              <PortableText blocks={mainContent} />
              {/* <ArrowLink green right href={topTextCta.link} target="_blank">
                {topTextCta.title}
              </ArrowLink> */}
            </h3>
          </PicText>
        </div>
      </PicContentOverlay>
      <SideContent right={contentLocation === "right"}>
        <div className="sideContentWrapper">
          <p>{sideSecBlurb}</p>
          <ArrowLink green right href={sideSecCta.link} target="_blank">
            {sideSecCta.title}
          </ArrowLink>
        </div>
      </SideContent>
    </PicHero>
  )
}

export default PicContent
