import React from 'react'
import CustomerSlider from '../customerslider'

function Customer() {
  return (
    <div className='bg-[#1C140F]'>
        <div className='max-w-[1320px] mx-auto p-[30px] text-center space-y-10'>
            <div className='space-y-7'>
                <h2 className='text-[36px] font-bold'>Trusted by Thousands of Happy Customer</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
              <CustomerSlider />
            </div>
        </div>
    </div>
  )
}

export default Customer