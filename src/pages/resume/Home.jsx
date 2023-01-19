import React from 'react';
import Header from '../../components/layout/Header';

import About from '../../components/layout/About';
import Resume from '../../components/layout/Resume';
import walpaper from '../../assets/walpaper.jpg';
import Skills from '../../components/layout/Skills';
import Footer from '../../components/layout/Footer';
import Portfolio from '../../components/layout/Portfolio';
import Experience from '../../components/layout/Experience';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${walpaper})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Header />
      <About />
      <Skills />
      <Resume />
      <Experience />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;
