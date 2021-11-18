import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from "gatsby-source-sanity"
import clientConfig from "../../../client-config"
import PortableText from "../partials/PortableText"

import {
  PicHero,
  PicContentOverlay,
  PicImg,
  PicText,
  PicTitle,
  PlayBut,
} from "../../styles/articleStyles"
import { ArrowLink } from "../../styles/globalStyles"

const PicTopHero = ({ pageTemplate, mainImage,introText, headline }) => {
  const imageData = getGatsbyImageData(
    mainImage.asset,
    { maxWidth: 3000 },
    clientConfig.sanity
  )
  return (
    <PicHero PicTopHero>
      <PicImg PicTopHero>
        <GatsbyImage
          image={imageData}
          // width={2200}
          // height={1300}
          layout="fullWidth"
          aspectRatio={22 / 15}
          quality={95}
          fit="cover"
          className="hero"
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `0`, gridArea: "1 / 1 ", height: "100%" }}
        />
      </PicImg>
      <PicContentOverlay PicTopHero>
        <div className="picContentWrapper">
          <PicTitle >{pageTemplate}</PicTitle>

          <PicText>
            <h2>{headline}</h2>
            <h3>
              <PortableText blocks={introText} />
            </h3>
          </PicText>
        </div>
      </PicContentOverlay>
    </PicHero>
  )
}

export default PicTopHero
