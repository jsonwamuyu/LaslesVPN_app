import React from 'react'

const Features = () => {
  return (
    <section className='w-full bg-[#f6f6f6] flex flex-col sm:flex-row px-[1rem] sm:px-[3rem] 
    md:px-[6rem] lg:px-[12rem] items-center justify-center '>
        <div className='flex'>
            <img src="/sec.PNG" alt="" />
        </div>
        <div>
            <h2 className='font-normal text-[35px] leading-[50px]'>We Provide Many Features You Can Use</h2>
            <p className='sm:max-w-[450px]'>
                You can explore the features that we provide with fun and have their own functions each feature.
            </p>
        </div>
    </section>
  )
}

export default Features