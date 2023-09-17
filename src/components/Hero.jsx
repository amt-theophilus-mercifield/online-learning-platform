import styled from "styled-components"
import ImgSlider from "./ImgSlider";

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
            {/* <img src="../images/pexels-max-fischer-5212664.jpg" alt="hero image" /> */}
            <ImgSlider />
        </HeroImg>
    </Container>
  )
}

export default Hero

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: calc(100% - 110px);
    height: calc(100vh - 70px);
    margin: 0 55px; 

    @media only screen and (max-width: 768px){
        flex-direction: column;   
          
    }
`;

const CTA = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 50px;

    @media only screen and (max-width: 768px){
        text-align: center;
        width: 100%;
        gap: 30px;
    }
 
    h2 {
        font-size: 60px;
        margin: 0;
    }
    p{
        font-size: 20px;
        margin: 0;
    }
`;

const Btns = styled.div`
    display: flex;
    gap: 50px;
    button {
        font-size: 18px;
        padding: 15px 30px;
        border-radius: 10px;
        border: none;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    }

    @media only screen and (max-width: 768px){
        place-self: center;
    }

`;
const HeroImg = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 768px){
        width: 100%;
    }
`;