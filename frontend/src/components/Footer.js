import styled from 'styled-components';

const Footer = () => {
  return (
    <footer>
        <div className="about">
          <p>Etiam et id tincidunt faucibus mollis a sociis pretium fermentum quis magna faucibus lacus.</p>
          <div className="links">
            <h3>UA Marketplace</h3>
            <a href='/home'><span>Home</span></a>
            <a href='/home'><span>Discover</span></a>
            <a href='/home'><span>About Us</span></a>
          </div>
        </div>
        <hr/>
        <div className="contact">
          <div className="social-links">Links</div>
          <p>copyright</p>
        </div>
      </footer>

  );
}

export default Footer;
