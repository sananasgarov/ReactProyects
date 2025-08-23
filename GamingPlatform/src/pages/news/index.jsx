import React from 'react'
import Search from '../../components/newscomp/search'
import NewsInformation from '../../components/newscomp/NewsInformation'
import ContactHome from '../../components/homecomp/contacyhome'

function News() {
  return (
    <div className='max-w-[1320px] mx-auto p-4 space-y-12'>
      <Search />
      <NewsInformation />
      <ContactHome />
    </div>
  )
}

export default News