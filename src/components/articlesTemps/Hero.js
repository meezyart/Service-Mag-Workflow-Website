import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from "gatsby-source-sanity"
import clientConfig from "../../../client-config"
import PortableText from "../partials/portableText"
import {
  MainHero,
  HeroContent,
  HeroImg,
  HeroContentOverlay,
  PicTitle
} from "../../styles/articleStyles"
import {
  Line,
  // ArrowLink,
  Col,
  Container,
  Flex,
} from "../../styles/globalStyles"

const Hero = ({
  col1Content,
  col2Content,
  heading,
  subTitle,
  heroImage,
  pageTemplate,
  links,
}) => {
  const imageData = getGatsbyImageData(
    heroImage.asset,
    { maxWidth: 3000 },
    clientConfig.sanity
  )
  return (
    <MainHero>
      <HeroImg>
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
      </HeroImg>
      <PicTitle pageTitle>{pageTemplate}</PicTitle>
      <HeroContentOverlay>
        <Container>
          <Flex alignBottom gap="2rem 5rem">
            <Col size="1">
              <h1 dangerouslySetInnerHTML={{ __html: `<i> ${heading} </i>` }} />
              {/* <h1>
                {heading}
              </h1> */}
              <Line />
              <h2>{subTitle}</h2>
            </Col>
            <Col size="1"></Col>
          </Flex>
        </Container>
      </HeroContentOverlay>

      <HeroContent>
        <Container>
          <Flex alignTop respond gap="2rem 4rem">
            <Col size="1">
              <PortableText blocks={col1Content} />
            </Col>
            <Col size="1">
              <PortableText blocks={col2Content} />
            </Col>
          </Flex>

          {/* {links && links[0] && (
            <Flex center respond>
              <ArrowLink green pt="1rem">
                {links[0]}
              </ArrowLink>
            </Flex>
          )} */}
        </Container>
      </HeroContent>
    </MainHero>
  )
}

export default Hero
