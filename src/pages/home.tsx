import React from 'react';
import HeroSection from '../components/HeroSection';
import SlidingBar from '../components/SlidingBar';
import Investment from '../components/Investment';
import Partners from '../components/partners';
import NewsLetter from '../components/NewsLetter';
import Roadmap from '../components/Roadmap';
import Wave from '../components/Wave/index';
// import Team from '../components/Team';
// import DonutChart from '../components/DountChart';
// import Teams from '../components/Teams';

function Home() {
  return (
    <>
      <HeroSection />
      <SlidingBar />
      <Investment />
      <Wave />
      <Roadmap />
      {/* <Team /> */}
      {/* <Teams /> */}
      {/* <DonutChart /> */}
      <NewsLetter />
      <Partners />
    </>
  );
}

export default Home;
