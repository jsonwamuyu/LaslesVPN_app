import React from 'react'
import {HiGift, HiCube,HiCheck} from 'react-icons/hi'

const Plan = () => {
  return (
    <section className='bg-[#F6F6F6] w-full px-[1rem] sm:px-[3rem] justify-center
        flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 md:px-[6rem] lg:px-[12rem] py-[50px]'>
        <div className='bg-white flex flex-col p-5 space-y-5 items-center justify-canter rounded-[10px]'>
        <HiGift className='h-20 w-20 text-[#F53838]'/>
        <h4 className='font-medium text-[18px] leading-[30px]'>Free Plan</h4>
        <div className='flex flex-col space-y-2 items-start justify-center pt-4'>
            <div className=' flex items-center justify-start space-x-2'>
                <HiCheck className='h-5 w-5 text-green-600' />
                <p>Powerfull online protection</p>
            </div>
            <div className=' flex items-center justify-start space-x-2'>
                <HiCheck className='h-5 w-5 text-green-600' />
                <p>Internet without borders</p>
            </div>
            <div className=' flex items-center justify-start space-x-2'>
                <HiCheck className='h-5 w-5 text-green-600' />
                <p>Supercharged VPN</p>
            </div>
            <div className=' flex items-center justify-start space-x-2'>
                <HiCheck className='h-5 w-5 text-green-600' />
                <p>No specific time limits.</p>
            </div>
        </div>
        </div>
        <div className='bg-white flex flex-col p-5 space-y-5 items-center justify-canter rounded-[10px]'>
            <HiCube className='h-20 w-20 text-[#F53838]'/>
            <h4 className='font-medium text-[18px] leading-[30px]'>Free Plan</h4>
            <div className='flex flex-col space-y-2 items-start justify-center pt-4'>
                <div className=' flex items-center justify-start space-x-2'>
                    <HiCheck className='h-5 w-5 text-green-600' />
                    <p>Powerfull online protection</p>
                </div>
                <div className=' flex items-center justify-start space-x-2'>
                    <HiCheck className='h-5 w-5 text-green-600' />
                    <p>Internet without borders</p>
                </div>
                <div className=' flex items-center justify-start space-x-2'>
                    <HiCheck className='h-5 w-5 text-green-600' />
                    <p>Supercharged VPN</p>
                </div>
                <div className=' flex items-center justify-start space-x-2'>
                    <HiCheck className='h-5 w-5 text-green-600' />
                    <p>No specific time limits.</p>
                </div>
            </div>
        </div>
        <div className='bg-white flex flex-col p-5  pb-[10rem] space-y-5 items-center justify-between rounded-[10px]'>
            <HiGift className='h-20 w-20 text-[#F53838]'/>
            <h4 className='font-medium text-[18px] leading-[30px]'>Free Plan</h4>
            <div className='flex flex-col space-y-2 items-start justify-center pt-4'>
                <div className=' flex items-center justify-start space-x-2'>
                    <HiCheck className='h-5 w-5 text-green-600' />
                    <p>Powerfull online protection</p>
                </div>
                <div className=' flex items-center justify-start space-x-2'>
                    <HiCheck className='h-5 w-5 text-green-600' />
                    <p>Internet without borders</p>
                </div>
                <div className=' flex items-center justify-start space-x-2'>
                    <HiCheck className='h-5 w-5 text-green-600' />
                    <p>Supercharged VPN</p>
                </div>
                <div className=' flex items-center justify-start space-x-2'>
                    <HiCheck className='h-5 w-5 text-green-600' />
                    <p>No specific time limits.</p>
                </div>
            </div>
            <div className="flex flex-col space-y-4 items-center justify-center mt-auto ">
                <h3 className='font-medium text-[25px] leading-[30px]'>Free</h3>
                <a href="" className="text-white bg-[#F53838] rounded-[10px] px-4 py-2 flex items-center justify-center
                hover:text-[#F53838] border hover:border-[#F53838] hover:bg-transparent transition-all duration-300 shadow-sm">Select</a>
            </div>
        </div>
    </section>
  )
}

export default Plan;