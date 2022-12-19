import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Hel from '../component/helmet/Hel';
import GameItem from '../component/ui/gameItem/GameItem';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

// import games from '../assets/data/games';

import '../style/review.css';

const Review = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await axios.get('http://139.180.139.46:7978/api/game-json');
        setGames(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, []);

  return (
    <>
      {games && (
        <Hel title="Review">
          <div className="body">
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
              <div className="section">
                <h2 className="review_title">App’s Reviews</h2>
                <p className="review_desc">Reviews of selected apps that you will definitely like. Choose the best of the best with us.</p>
              </div>
              <Row>
                {games.map((game, index) => (
                  <Col lg="4" sm="6" key={index}>
                    <GameItem game={game} />
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </Hel>
      )}
    </>
  );
};

export default Review;
