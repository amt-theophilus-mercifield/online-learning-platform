import styled from "styled-components"
import Hero from "./Hero"
import Logos from "./Logos"
import Features from "./Features"
import OurTeam from "./OurTeam"
import Footer from "./Footer"

const LandingPage = () => {
  return (
    <Container>
        <Hero />
        <Logos />
        <Features />
        <OurTeam />
        <Footer />
    </Container>
  )
}

export default LandingPage

const Container = styled.main`
position: relative;
top: 70px;
width: 100vw;
height: calc(100vh - 70px);
// background: white;
overflow-x: hidden;
`