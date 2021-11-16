import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from "gatsby-source-sanity"
import clientConfig from "../../../client-config"
import PortableText from "../partials/portableText"
import {
  PartnerHero,
  PartnerContentOverlay,
  PartnerImg,
  IntroText,
  PicTitle,
  ScrollBox,
  MainContent,
} from "../../styles/articleStyles"
import { Container } from "../../styles/globalStyles"
const Partnering = ({
  mainImage,
  heading,
  headline,
  introText,
  pageTemplate,
  pageSections,
}) => {
  console.log(
    "Check => ~ file: Partnering.js ~ line 16 ~ Partnering ~ mainImage, headline",
    mainImage
  )
  const imageData = getGatsbyImageData(
    mainImage.asset,
    { maxWidth: 9000
     },
    clientConfig.sanity
  )
  return (
    <>
      <PartnerImg>
        <GatsbyImage
          image={imageData}
          // width={2200}
          // height={1300}
          layout="fullWidth"
          aspectRatio={16 / 9}
          quality={95}
          fit="cover"
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `0`, gridArea: "1 / 1 ", height: "100%" }}
        />
      </PartnerImg>
      <PartnerHero>
        <PartnerContentOverlay>
          {/* <Container> */}
          <IntroText>
            <h2>{pageTemplate}</h2>
            <h1>{headline}</h1>
            <h3>
              <PortableText blocks={introText} />
            </h3>
          </IntroText>
          <ScrollBox>
            <h2 className="pageHeader"> {pageSections[0].heading}</h2>
            <MainContent>
              <PortableText blocks={pageSections[0].mainContent} />
            </MainContent>
          </ScrollBox>
          {/* </Container> */}
        </PartnerContentOverlay>
      </PartnerHero>
    </>
  )
}

export default Partnering
