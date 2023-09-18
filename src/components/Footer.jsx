import styled from "styled-components"

const Footer = () => {
  return (
    <Container>
        <Content>
            <Copyright>
                <span>&copy; 2023 TTU Final Year Project. All rights reserved.</span>
            </Copyright>
            <Socials>
                <a href=""><img src="../images/youtube.svg" alt="" /></a>
                <a href=""><img src="../images/instagram-icon.svg" alt="" /></a>
                <a href=""><img src="../images/github.svg" alt="" /></a>
                <a href=""><img src="../images/linkedin.svg" alt="" /></a>
            </Socials>
        </Content>

    </Container>
  )
}

export default Footer

const Container = styled.footer`
    display: flex;
    width: 100vw;
    height: 80px;
    padding: 0 55px;
    background: #01192e;
    color: white;
`;

const Content = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%
`

const Copyright = styled.div``

const Socials = styled.div`
    width: 176px;
    display: flex;
    justify-content: space-between;
`