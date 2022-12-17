import React from 'react';
import { Container } from 'reactstrap';
import webName from '../../assets/data/webName';

import '../../style/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div>
          <div className="logo">
            <a href="#" className="image">
              {webName[0].title}
            </a>
          </div>
          <div className="description">
            {webName[0].title} team invites you to the world of the finest games and distinctly-reviewed apps. Every day we choose and check zillions of
            different mobile programs to provide you with entertainment and honest reviews. Our professional editors strive to make {webName[0].title} a
            top-notch source for getting all the fans of iOS and Android games and apps together.
          </div>
          <div className="copyright">© 2022 {webName[0].title} - All Rights Reserved</div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
