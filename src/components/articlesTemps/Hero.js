import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from "gatsby-source-sanity"
import clientConfig from "../../../client-config"
import PortableText from "../partials/PortableText"
import {
  MainHero,
  HeroContent,
  HeroImg,
  HeroContentOverlay,
  PicTitle,
} from "../../styles/articleStyles"
import {
  Line,
  ArrowLink,
  Col,
  Container,
  Flex,
} from "../../styles/globalStyles"
import GetArrowLink from "../lib/getArrowLink"

const Hero = ({
  col1Content,
  col2Content,
  heading,
  subTitle,
  heroImage,
  pageTemplate,
  link,
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
              <div className="inner">
                <h1
                  dangerouslySetInnerHTML={{ __html: `<i> ${heading} </i>` }}
                />

                <Line />
                <h2 dangerouslySetInnerHTML={{ __html: subTitle }} />
              </div>
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

          {link && (
            <Flex center respond>
              <GetArrowLink {...link}/>
            </Flex>
          )}
        </Container>
      </HeroContent>
    </MainHero>
  )
}

export default Hero
