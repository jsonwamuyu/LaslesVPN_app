"use client";
import { useState } from "react";
import {HiX,HiMenuAlt3} from "react-icons/hi"

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

  return (
    <header className='flex items-center justify-between w-full px-[1rem] py-[40px] sm:px-[4rem]'>
        <div className='flex space-x-2 justify-center items-center'>
            <div className="flex flex-row">
                <div className='h-6 w-6 bg-[#F53838] rounded-full'/>
                <div className='h-6 w-6 bg-[#0B132A] rounded-full z-10 -ml-3'/>
                <div className='h-6 w-6 bg-[#F53838] rounded-full -ml-3'/>
            </div>
            <h3 className='text-[20px] leading-[24px] font-medium'>Lasles<span  className='font-bold'>VPN</span></h3>
        </div>
        <ul className='hidden sm:flex space-x-[40px] items-center justify-center sm:pl-6'>
            <li><a href="" className='active'>About</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Help</a></li>
        </ul>
        <div className="sm:hidden h-[50px] w-[50px] relative">
            <HiMenuAlt3 className="h-[80%] w-[80%] cursor-pointer"/>
        </div>
        <div className='hidden lg:flex space-x-4 items-center justify-center'>

            <a href="" className='text-[#0B132A] leading-[19px] border-white hover:border-[#F53838]
            hover:text-[#F53838] flex items-center justify-center py-2 px-6 rounded-[50px]'>Sign In</a>


            <a href="" className='text-[#F53838] border rounded-[50px] border-[#F53838] bg-transparent p-2 px-6
            flex items-center justify-center hover:border-[#0B132A]'>Sign Up</a>
        </div>
    </header>
  )
}

export default Navbar;