import styled from "styled-components"

const Features = () => {
  return (
    <Container>
        <Heading>
            <h2>Features</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum voluptatem perferendis, ea numquam necessitatibus laborum.</p>
        </Heading>
        <Content>
            <Wrap>
                <img src="../images/feature-icon.svg" alt="features-icon" />
                <h3>Responsive Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aperiam perferendis sequi? Optio dolorem voluptatem eius nemo quae, illum esse, eos incidunt ipsum, animi sequi!</p>
                <button>Learn More</button>
            </Wrap>
            <Wrap>
                <img src="../images/feature-icon.svg" alt="" />
                <h3>Responsive Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aperiam perferendis sequi? Optio dolorem voluptatem eius nemo quae, illum esse, eos incidunt ipsum, animi sequi!</p>
                <button>Learn More</button>
            </Wrap>
            <Wrap>
                <img src="../images/feature-icon.svg" alt="" />
                <h3>Responsive Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aperiam perferendis sequi? Optio dolorem voluptatem eius nemo quae, illum esse, eos incidunt ipsum, animi sequi!</p>
                <button>Learn More</button>
            </Wrap>
        </Content>
    </Container>
  )
}

export default Features

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

const Heading = styled.div`
    
`;

const Content = styled.div`
    display: flex;
    gap: 50px;  
`;

const Wrap = styled.div`
    background: #fff;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;