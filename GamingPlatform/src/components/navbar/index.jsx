import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div className='text-white p-[25px] flex relative z-[1000] justify-between items-center max-w-[1320px] mx-auto'>
        <div className='text-[29px] font-bold'>LOGO</div>
        <div>
          <ul className='flex items-center justify-between gap-[80px]'>
            <li><Link to='/'><button className='cursor-pointer hover:text-[#FA9021] transtion-all duration-300'>Home</button></Link></li>
            <li><Link to='/about'><button className='cursor-pointer hover:text-[#FA9021] transtion-all duration-300'>Aboutus</button></Link></li>
            <li><Link to='/services'><button className='cursor-pointer hover:text-[#FA9021] transtion-all duration-300'>Portfolio</button></Link></li>
            <li><Link to='/news'><button className='cursor-pointer hover:text-[#FA9021] transtion-all duration-300'>News</button></Link></li>
            <li><Link to='/contact'><button className='bg-[#FA9021] rounded-md py-[10px] px-[30px] hover:bg-inherit hover:outline hover:outline-[#FA9021] cursor-pointer transition-all duration-300'>Contact Us</button></Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar