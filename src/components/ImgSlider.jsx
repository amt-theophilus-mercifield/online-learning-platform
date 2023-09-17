import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
            <img src="../images/pexels-katerina-holmes-5905700.jpg" alt="hero image" />
        </Wrap>
        <Wrap>
            <img src="../images/pexels-cottonbro-studio-4620862.jpg" alt="hero image" />
        </Wrap>
        <Wrap>
            <img src="../images/pexels-marcus-aurelius-4063590.jpg" alt="hero image" />
        </Wrap>
    </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider)`
    width: 100%;
    min-width: calc(50vw - 125px);
    height: 100%;
    // overflow: hidden;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        // Anything for active button
    } 

    .slick-list {
        border-radius: 50px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        // overflow: initial;
    }

`
const Wrap = styled.div`
    cursor: pointer;
    width: 100%;
    height: 100%;

    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

    // padding: 25px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover; 
        object-position: center center;
    }

`