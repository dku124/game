import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Hel from '../component/helmet/Hel';
import aboutImg from '../assets/images/aboutus.png';
import webName from '../assets/data/webName';

import '../style/aboutus.css';

const Aboutus = () => {
  return (
    <Hel title="About us">
      <div className="body about">
        <Container>
          <div className="section breadcrumbs">
            <a href="#" className="title">
              Home
            </a>
            <i class="ri-arrow-right-s-line"></i>
            <a href="#" className="title">
              App Review
            </a>
          </div>
          <h2 className="about_title">Discover Our Story</h2>
          <p className="about_desc">
            Our team made a great research and handpicked the best Android and iOS apps so that you could enjoy your experience with any of them.
          </p>
          <Row>
            <Col md="6">
              <div className="about_content">
                <div className="about_img">
                  <img src={aboutImg} alt="" />
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="about_detail">
                <h3>About us</h3>
                <p>
                  {webName[0].title} isn’t just an app’s catalog. Our team made a great research and handpicked the best Android and iOS apps so that you could
                  enjoy your experience with any of them. Here you will only find the titles that are worth your attention.
                </p>
                <p>
                  Complementary content like reviews, screenshots, and blog posts are all provided by our full team of editors without a trace of developer
                  influence. We uphold the highest standards of neutrality in everything we do.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Hel>
  );
};

export default Aboutus;
