import React from 'react'
import PortableText from "../partials/PortableText"
import {
  Col,
  Container,
  Flex,
} from "../../styles/globalStyles";


import { TwoColSection, DidYouBox ,MainContent} from "../../styles/articleStyles"

const DidYouKnow = ({heading, boxText,mainContent, introText}) => {
    return (
      <TwoColSection>
        <Container>
          {introText && (
            <h3 className="introText">
              <PortableText blocks={introText} />
              <br />
            </h3>
          )}

          <Flex alignTop respond gap="2.5rem 4rem">
            <Col size="1">
              <DidYouBox>
                <div className="inner">
                  <h2>{heading}</h2>
                  <h3>
                    <PortableText blocks={boxText} />
                  </h3>
                </div>
              </DidYouBox>
            </Col>
            <Col size="1">
              <MainContent>
                <PortableText blocks={mainContent} />
              </MainContent>
              {/* <ArrowLink green twoLine>
                <h3>
                  {" "}
                  heree is the <span>link thinner text</span>
                </h3>
                <p>sthis can be the subtext</p>
              </ArrowLink> */}
            </Col>
          </Flex>
        </Container>
      </TwoColSection>
    )
}

export default DidYouKnow
