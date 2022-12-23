import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import api from '../../assets/data/api';
import '../../style/header.css';

const Header = () => {
  const navRef = useRef();
  const toggleMenu = () => {
    navRef.current.classList.toggle('navigation_active');
  };
  const closeMenu = () => {
    navRef.current.classList.remove('navigation_active');
  };

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
        <header className="header">
          <Container>
            <Row>
              <div className="header_cont">
                <div className="logo">
                  <a href="#" className="image">
                    {codeA[0].title}
                  </a>
                </div>
                <div className="navigation" ref={navRef}>
                  <div className="search">
                    <form action method="get">
                      <input type="text" placeholder="Search..." />
                      <button className="button">
                        <i class="ri-search-2-line"></i>
                      </button>
                    </form>
                  </div>
                  <div className="navigationbar">
                    <div className="item">
                      <Link to="/">App Review</Link>
                    </div>
                    <div className="item">
                      <Link to="/aboutus">About us</Link>
                    </div>
                  </div>
                  <div className="btn btn_close" onClick={closeMenu}>
                    <i class="ri-close-line"></i>
                  </div>
                </div>
                <span className="menu" onClick={toggleMenu}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </Row>
          </Container>
        </header>
      )}
    </>
  );
};

export default Header;
