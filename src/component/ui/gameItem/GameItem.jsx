import React from 'react';
import { Link } from 'react-router-dom';

import '../../../style/gameItem.css';

const GameItem = ({ game }) => {
  const { img01, gameName, slug } = game;

  return (
    <div>
      <Link to={`/${slug}`} className="game_item">
        <img src={img01} />
        <span className="game-card-text">
          <span className="communication">Action</span>
          <span className="title">{gameName}</span>
          <span className="rating">
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
          </span>
        </span>
      </Link>
    </div>
  );
};

export default GameItem;
