import styled from "styled-components"
import ImgSlider from "./ImgSlider"

const Home = () => {
  return (
    <Container>
        <ImgSlider />

    </Container>
  )
}

export default Home

const Container = styled.main`
    width = 100vw;
    background = #040404;
`