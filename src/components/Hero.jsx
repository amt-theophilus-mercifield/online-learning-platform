import styled from "styled-components"
// import ImgSlider from "./ImgSlider";

const Hero = () => {
  return (
    <Container>
        <CTA>
            <h2>Learn from Anywhere and with Great Tools</h2>
            <p>
                This Platform Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit dolore vero ipsa! Dolor cupiditate exercitationem quia beatae iure tenetur.
            </p>
            <Btns>
                <button>Get Started</button>
                <button>How it Works</button>
            </Btns>
        </CTA>
        <HeroImg>
            <img src="../images/pexels-max-fischer-5212664.jpg" alt="hero image" />
            {/* <ImgSlider /> */}
        </HeroImg>
    </Container>
  )
}

export default Hero

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    height: calc(100% - 70px);

    margin: 0 55px; 
`;

const CTA = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    margin-right: 25px;
    // height: 100%;
    h2 {
        font-size: 60px;
        // font-weight: 700;
    }
    p{
        font-size: 20px;
    }
`;

const Btns = styled.div`
    display: flex;
    gap: 20px;
    button {
        font-size: 18px;
        padding: 15px 30px;
        border-radius: 10px;
        border: none;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    }
`;
const HeroImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    // overflow: hidden;
    img {
        // width: 100%;
        // height: 100%;
        object-fit: cover;
        box-shadow: 0 12px 14px 0 rgba(0,0,0,.3);
        border-radius: 20px;
        overflow: hidden;
    }
`;