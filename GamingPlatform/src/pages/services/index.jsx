import React from 'react'
import ServicesComp1 from '../../components/servicescomp/servicescomp1'
import Video from '../../components/servicescomp/videocomp/incex'
import ReadMore from '../../components/servicescomp/readmore'
import ReadMore2 from '../../components/servicescomp/readmore2'
import ReadMore3 from '../../components/servicescomp/readmore3'
import Customer from '../../components/servicescomp/customer'
import ContactHome from '../../components/homecomp/contacyhome'

function Services() {
  return (
    <div className='space-y-15'>
      <ServicesComp1 />
      <Video />
      <ReadMore />
      <ReadMore2 />
      <ReadMore3 />
      <Customer />
      <ContactHome />
    </div>
  )
}

export default Services