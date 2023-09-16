import styled from "styled-components"
import Search from "./Search"

const Header = () => {
  return (
    <Nav>
        <Logo>
            <img src="../vite.svg" alt="logo" />
        </Logo>
        <NavMenu>
            <Menu1>
            <a href="/categories">
                <span>Categories</span>
            </a>
            <Search />
            </Menu1>
            <Menu2>
            <a href="/discover">
                <span>Discover</span>
            </a>
            <a href="/how-it-works">
                <span>How it Works</span>
            </a>
            <a href="/my-courses">
                <span>My Courses</span>
            </a>
            <a href="/bookmarked">
                <img src="../bookmark-icon.svg" alt="bookmark" />
            </a>
            <a href="/liked">
                <img src="../like-icon.svg" alt="like" />
            </a>
            <a href="/notifications">
                <img src="../notification-icon.svg" alt="notification" />
            </a>
            </Menu2>
        </NavMenu>
        <UserImg>
            <img src="../pexels-karolina-grabowska-6256140.jpg" alt="" />
        </UserImg>

    </Nav>
  )
}

export default Header

const Nav = styled.nav`
    position: fixed;
    background: #B6DDFF;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 1.2px;
    z-index: 3;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`;

const Logo = styled.a`
    cursor: pointer;
    
    img{
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    flex: 1;
    // flex-flow: row nowrap;
    height: 100%
    // margin: 0;
    // padding: 0;
    // position: relative;
    // margin-right: auto; 
    // margin-left: 25px;

    @media (max-width: 768px){
        // display: none;
    }

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
    }
`
const Menu1 = styled.nav`
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin-left: 25px;
`;
const Menu2 = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const UserImg = styled.a`
    width: 50px;
    height: 50px;
    min-width: 50px;
    display: flex;
    align-items: center;
    border: 3px solid white;
    border-radius: 50%;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, .4);
    overflow: hidden;

    img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

