import React from 'react';
import Routers from '../../routers/Routers';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
