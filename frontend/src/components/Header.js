import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {CTA} from './Styles'

const Header = () => {

  

  return (
    <Nav>
      <Logo>
        <Link to='/'>UA MARKETPLACE</Link>
      </Logo>
      <NavMenu>
        
      </NavMenu>
      <div className='cta'>    
      
      <div className='log-out'>
        <Link to='/logout' >LOG OUT</Link>
      </div>
      </div>
    </Nav>
  );
}


const Logo = styled.h1`
    background-image:linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);;
    letter-spacing: 1.42px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
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
      position: relative;
}
  }

  @media (max-width: 768px) {
    display: none;
  }
`
export default Header;
