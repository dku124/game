import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Aboutus from '../pages/Aboutus';
import GameDetail from '../pages/GameDetail';
import Review from '../pages/Review';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/review" />} />
      <Route path="/review" element={<Review />} />
      <Route path="/:slug" element={<GameDetail />} />
      <Route path="/aboutus" element={<Aboutus />} />
    </Routes>
  );
};

export default Routers;
