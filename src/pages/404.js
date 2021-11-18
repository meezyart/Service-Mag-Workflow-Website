import * as React from "react"
import { TopForm } from "../styles/articleStyles"
import { Container, StyledFullScreenWrapper } from "../styles/globalStyles"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <TopForm>
      <StyledFullScreenWrapper>
        <Container fluid>
          <Seo title="404: Not found" />

          <h1>404: Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Container>
      </StyledFullScreenWrapper>
    </TopForm>
  </Layout>
)

export default NotFoundPage
