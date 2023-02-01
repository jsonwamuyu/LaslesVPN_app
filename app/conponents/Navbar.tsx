import React from 'react'

const Navbar = () => {
  return (
    <header className='flex items-center justify-between w-full px-[1rem] py-[40px] sm:px-[5rem]'>
        <div className='flex space-x-2 justify-center items-center'>
            <div className='h-3 w-3 bg-[#F53838]'/>
            <h3 className='text-[20px] leading-[24px] font-medium'>Lasles<span  className='font-bold'>VPN</span></h3>
        </div>
        <ul className='hidden sm:flex space-x-[40px] items-center justify-center'>
            <li><a href="" className='active'>About</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Help</a></li>
        </ul>
        <div className='hidden sm:flex space-x-4 items-center justify-center'>
            <a href="" className='text-[#0B132A] leading-[19px] border-blue-700 hover:border-[#F53838]
            hover:text-[#F53838] flex items-center justify-center py-2 px-6 rounded-[50px]'>Sign In</a>
            <a href="" className='text-[#F53838] border rounded-[50px] border-[#F53838] bg-transparent p-2 px-6
            flex items-center justify-center hover:border-[#0B132A]'>Sign Up</a>
        </div>
    </header>
  )
}

export default Navbar;