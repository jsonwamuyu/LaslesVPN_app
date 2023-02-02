import React from 'react'
import {HiCheckCircle} from 'react-icons/hi'

const Features = () => {
  return (
    <section className='w-full bg-white flex flex-col sm:flex-row px-[1rem] sm:px-[3rem] sm:space-x-8 
    md:px-[6rem] lg:px-[12rem] items-center justify-center py-[3rem] '>
        <div className='flex w-full sm:w-1/2'>
            <img src="/sec.PNG" alt="" className='w-full object-contain' />
        </div>
        <div className='w-full sm:w-1/2 flex-col space-y-2'>
            <h2 className='font-normal text-[35px] leading-[50px]'>We Provide Many Features You Can Use</h2>
            <p className='sm:max-w-[450px]'>
                You can explore the features that we provide with fun and have their own functions each feature.
            </p>
            <div className=' flex items-center justify-start space-x-2'>
                <HiCheckCircle className='h-5 w-5 text-green-600' />
                <p>Powerfull online protection</p>
            </div>
            <div className=' flex items-center justify-start space-x-2'>
                <HiCheckCircle className='h-5 w-5 text-green-600' />
                <p>Internet without borders</p>
            </div>
            <div className=' flex items-center justify-start space-x-2'>
                <HiCheckCircle className='h-5 w-5 text-green-600' />
                <p>Supercharged VPN</p>
            </div>
            <div className=' flex items-center justify-start space-x-2'>
                <HiCheckCircle className='h-5 w-5 text-green-600' />
                <p>No specific time limits.</p>
            </div>
        </div>
    </section>
  )
}

export default Features