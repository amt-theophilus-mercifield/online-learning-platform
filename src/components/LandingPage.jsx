import styled from "styled-components"
import Hero from "./Hero"

const LandingPage = () => {
  return (
    <Container>
        LandingPage
        <Hero />
    </Container>
  )
}

export default LandingPage

const Container = styled.main`
position: relative;
top: 70px;
width: 100vw;
height: calc(100vh - 70px);
background: white;
`