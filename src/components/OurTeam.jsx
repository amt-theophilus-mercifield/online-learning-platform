import styled from "styled-components"

const OurTeam = () => {
  return (
    <Container>
        <Heading>
            <h2>Meet our Team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum voluptatem perferendis, ea numquam necessitatibus laborum.</p>
        </Heading>
        <Content>
            <Wrap>
                <img src="../images/Lauren.svg" alt="features-icon" />
                <h3>John Doe</h3>
                <p>Lead Singer</p>
                <Socials>
                    <a href=""><img src="../images/twitter.svg" alt="" /></a>
                    <a href=""><img src="../images/dribble.svg" alt="" /></a>
                    <a href=""><img src="../images/instagram.svg" alt="" /></a>
                </Socials>
            </Wrap>
            <Wrap>
                <img src="../images/michael.svg" alt="features-icon" />
                <h3>John Doe</h3>
                <p>Lead Singer</p>
                <Socials>
                    <a href=""><img src="../images/twitter.svg" alt="" /></a>
                    <a href=""><img src="../images/dribble.svg" alt="" /></a>
                    <a href=""><img src="../images/instagram.svg" alt="" /></a>
                </Socials>
            </Wrap>
            <Wrap>
                <img src="../images/sarah.svg" alt="features-icon" />
                <h3>Sarah K.</h3>
                <p>Lead Singer</p>
                <Socials>
                    <a href=""><img src="../images/twitter.svg" alt="" /></a>
                    <a href=""><img src="../images/dribble.svg" alt="" /></a>
                    <a href=""><img src="../images/instagram.svg" alt="" /></a>
                </Socials>
            </Wrap>
            
        </Content>
        
    </Container>
  )
}

export default OurTeam

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: calc(100% - 110px);
    height: calc(100vh - 70px);
    

    margin: 0 55px;
    padding: 50px 0;
    text-align: center;
`;

const Heading = styled.div``;

const Content = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;
    
    // gap: 30px;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border-radius: 20px;
    // width: 100%;
    
    img {
        object-fit: cover;
    }

    p{
        width: 80%;
        border-bottom: 1px solid gray;
        padding-bottom: 15px;
        margin-top: -10px;
    }
`;

const Socials = styled.div`
    display: flex;
    width: 128px;
    height: 80px;
    align-items: center;
    justify-content: space-between;
`;