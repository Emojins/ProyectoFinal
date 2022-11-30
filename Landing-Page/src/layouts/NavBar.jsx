import React from 'react';
import HeaderHome from '../components/layout/HeaderHome';
import Footer from '../components/layout/Footer';

const NavBar = ({ children }) => (
  <>
    <HeaderHome navPosition="right" className="reveal-from-bottom"/>
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default NavBar;  