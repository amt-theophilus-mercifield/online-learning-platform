import styled from "styled-components"

const Search = () => {
  return (
    <Container>
        <img src="../search-icon.svg" alt="search" />
        <span>Search anything..</span>
    </Container>
  )
}

export default Search

const Container = styled.div`
display: flex;
align-items: center;
padding: 0 20px;
height: 45px;
width: 100%;
min-width: 230px;
border-radius: 40px;
box-shadow: 2px 2px 4px rgba(0, 0, 0, .4);

// background: rgba(240, 248, 255, 0.6);
background: #f0f8ff;

span {
    padding: 0 20px;
}

`;