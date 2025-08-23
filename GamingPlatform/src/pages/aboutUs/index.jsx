import React from 'react'
import AboutComp1 from '../../components/aboutcomp/aboutcomp1'
import WhyWorkUs from '../../components/aboutcomp/whyworkus'
import AboutComp4 from '../../components/aboutcomp/aboutcomp4'
import OurTeam from '../../components/aboutcomp/ourteam'
import ContactHome from '../../components/homecomp/contacyhome'

function AboutUs() {
  return (
    <div className='bg-gradient-to-t from-[#1A0E01] to-[#010101]'>
      <AboutComp1 />
      <WhyWorkUs />
      <AboutComp4 />
      <OurTeam />
      <ContactHome />
    </div>
  )
}

export default AboutUs