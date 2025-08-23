import React from 'react'
import HomeAbout from '../../components/homecomp/homeabout'
import TrendGames from '../../components/homecomp/trendgames'
import Spiderman from '../../components/homecomp/spiderman'
import Advandec from '../../components/homecomp/advandec'
import Projects from '../../components/homecomp/Proyects'
import ContactHome from '../../components/homecomp/contacyhome'

function Home() {
  return (
    <div>
      <HomeAbout />
      <TrendGames />
      <Spiderman />
      <Advandec />
      <Projects />
      <ContactHome />
    </div>
  );
}

export default Home