import React from 'react'
import Layout from '../components/layout'
import { PicTitle, TopForm } from '../styles/articleStyles'
import { Container , Flex, StyledFullScreenWrapper} from '../styles/globalStyles'

const success = () => {
    return (
      <Layout>
          <TopForm>
            <StyledFullScreenWrapper>
        <Container fluid>

              <PicTitle pageTop>Top of Mind</PicTitle>

              <h1>Thank You!<br/> Your form has been Submitted</h1>
        </Container>
            </StyledFullScreenWrapper>
          </TopForm>
      </Layout>
    )
}

export default success
