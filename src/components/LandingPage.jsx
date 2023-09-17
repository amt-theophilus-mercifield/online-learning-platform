import styled from "styled-components"
import Hero from "./Hero"
import Logos from "./Logos"

const LandingPage = () => {
  return (
    <Container>
        <Hero />
        <Logos />
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