import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import webName from '../../assets/data/webName';

import '../../style/header.css';

const Header = () => {
  const navRef = useRef();
  const toggleMenu = () => {
    navRef.current.classList.toggle('navigation_active');
  };
  const closeMenu = () => {
    navRef.current.classList.remove('navigation_active');
  };
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="header_cont">
            <div className="logo">
              <a href="#" className="image">
                {webName[0].title}
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
  );
};

export default Header;
