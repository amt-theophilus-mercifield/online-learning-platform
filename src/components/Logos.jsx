import styled from "styled-components"

const Logos = () => {
  return (
    <Container>
        <Wrap>
            <a href="#"> <img src="../images/airbnb.svg" alt="airbnb" /> </a>
            <a href="#"> <img src="../images/google.svg" alt="airbnb" /> </a>
            <a href="#"> <img src="../images/amazon.svg" alt="airbnb" /> </a>
            <a href="#"> <img src="../images/microsoft.svg" alt="airbnb" /> </a>
            <a href="#"> <img src="../images/fedex.svg" alt="airbnb" /> </a>
            <a href="#"> <img src="../images/hubspot.svg" alt="airbnb" /> </a>
        </Wrap>
    </Container>
  )
}

export default Logos

const Container = styled.div`
    width: 100%;
    // width: calc(100% - 110px);
    height: 270px;
    border: 1px solid red;
    overflow: hidden;

    @media only screen and (max-width: 768px){
        height: 180px;
    }

`;

const Wrap = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    place-items: center;
    height: 100%;

    @media only screen and (max-width: 768px){
        padding: 20px;
        
        a img {
            width: 70px;
        }
    }
`