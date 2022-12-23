import React from 'react';
import { Container } from 'reactstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import api from '../../assets/data/api';

import '../../style/footer.css';

const Footer = () => {
  const [codeA, setCodeA] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await axios.get(api[0].gameCode);
        setCodeA(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, []);

  return (
    <>
      {codeA[0] && (
        <footer className="footer">
          <Container>
            <div>
              <div className="logo">
                <a href="#" className="image">
                  {codeA[0].title}
                </a>
              </div>
              <div className="description">
                {codeA[0].title} team invites you to the world of the finest games and distinctly-reviewed apps. Every day we choose and check zillions of
                different mobile programs to provide you with entertainment and honest reviews. Our professional editors strive to make {codeA[0].title} a
                top-notch source for getting all the fans of iOS and Android games and apps together.
              </div>
              <div className="copyright">© 2022 {codeA[0].title} - All Rights Reserved</div>
            </div>
          </Container>
        </footer>
      )}
    </>
  );
};

export default Footer;
