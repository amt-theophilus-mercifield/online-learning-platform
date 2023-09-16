import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick.slick.css"
import "slick-carousel/slick.slick-theme.css"

const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
  return (
    <Carousel {...settings}>
        <Wrap>
            <img src="../images/pexels-max-fischer-5212664.jpg" alt="hero image" />
        </Wrap>
        <Wrap>
            <img src="../images/pexels-max-fischer-5212664.jpg" alt="hero image" />
        </Wrap>
        <Wrap>
            <img src="../images/pexels-max-fischer-5212664.jpg" alt="hero image" />
        </Wrap>
        <Wrap>
            <img src="../images/pexels-max-fischer-5212664.jpg" alt="hero image" />
        </Wrap>
    </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider)`

`
const Wrap = styled.div`

`