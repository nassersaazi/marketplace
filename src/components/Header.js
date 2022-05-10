import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
      <Logo>
        UA MARKETPLACE
      </Logo>
      <NavMenu>
        <a href='/home'><span>HOME</span></a>
        <a href='/trending'><span>TRENDING</span></a>
        <a href='/discover'><span>DISCOVER</span></a>
        <a href='/about'><span>ABOUT US</span></a>
      </NavMenu>
      <CTA>
        <SignIn>SIGN IN</SignIn>
      </CTA>
    </Nav>
  );
}


const Logo = styled.div`
    background-color:red;
    letter-spacing: 1.42px;
`
const Nav = styled.nav`
    position: fixed;
    background: #ffffff;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 calc(3.5vw + 5px);
    letter-spacing: 1rem;
    z-index: 3;
`;


const Upload = styled.div`
  margin: 0 1rem;
`
const CTA = styled.div`
  display: flex;
  justify-content: space-between;
  letter-spacing: 1.42px;
`

const SignIn = styled.div`

`

const NavMenu = styled.div
`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: center;
  padding: 0px;
  position: relative;

  a {
    display: flex;
    align-items: center;
    padding: 0px 12px;

    span {
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
    }
    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`
export default Header;
