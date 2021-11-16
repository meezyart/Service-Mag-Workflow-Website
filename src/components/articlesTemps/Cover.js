import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Image from "gatsby-plugin-sanity-image"
import { CoverHero, CoverContent, TocTitle } from "../../styles/articleStyles"
import { Col, Container, Flex } from "../../styles/globalStyles"
import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from "gatsby-source-sanity"
import clientConfig from "../../../client-config"
import Link from "gatsby"

import PortableText from "../partials/portableText"

const transition =  {duration: .5, ease: [0.43, 0.13, 0.23, 0.96]};
const container = {
  hidden: {
    x: "100vw",
    transition,
  },
  show: {
    x: 0,
    transition,
  },
  exit: {
    x: "-100vw",
    transition,
  },
}


const CoverTemplate = ({ variants, headline,title,subtitle,tocTitle,tocList,introText ,mainImage}) => {
    const imageData = getGatsbyImageData(
      mainImage,
      { maxWidth: 3000, aspectRatio:22/9},
      clientConfig.sanity
    )
  return (
    <Container
      variants={variants}
      initial="hidden"
      animate="show"
      exit="exit"
      fluid
      // style={{}}
    >
      <Flex column>
        <CoverHero>
          <div className="heroWrap">
            <GatsbyImage
              image={imageData}
              className="hero"
              // width={2200}
              // height={1300}
              // layout="fullWidth"
              // aspectRatio={16 / 9}
              // quality={95}
              // fit="cover"
              // formats={["auto", "webp", "avif"]}
              alt={mainImage.alt}
              // style={{ marginBottom: `0`,  height: "100%" }}
            />
          </div>
          <div
            className="content top"
            style={{
              gridArea: "1/1",
              position: "relative",
              justifyContent: "space-around",
              display: "flex",
              flexDirection: "column",
              padding: "4rem",
              color: "white",
            }}
          >
            <h3>{title}</h3>
            <h1 dangerouslySetInnerHTML={{ __html: headline }} />
            <h4>{subtitle}</h4>
          </div>

          <CoverContent>
            <Container>
              <Flex alignTop respond gap="2rem 5rem">
                <Col size="2" className="content">
                  <PortableText blocks={introText} />
                </Col>
                <Col className="toc">
                  <h3>{tocTitle}</h3>
                  <ul className="links">
                    {tocList.length>=0 &&
                      tocList.map((item) => {
                        <TocTitle>
                          <Link to={"/"}>
                            <h4>{item.title}</h4>
                          </Link>
                          {item.subtitle}
                        </TocTitle>
                      })}

                    <TocTitle color="#46ABAC">
                      <h4>Prodect Spot light</h4>
                      reprehenderit in voluptate velit
                    </TocTitle>
                    <TocTitle color="#8A82BB">
                      <h4>Prodect Spot light</h4>
                      reprehenderit in voluptate velit
                    </TocTitle>
                    <TocTitle color="#EC8687">
                      <h4>Prodect Spot light</h4>
                      reprehenderit in voluptate velit
                    </TocTitle>
                  </ul>
                </Col>
              </Flex>
            </Container>
          </CoverContent>
        </CoverHero>
      </Flex>
    </Container>
  )
}

export default CoverTemplate
