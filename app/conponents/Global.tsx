import React from 'react'

const Global = () => {
  return (
    <section className='flex flex-col items-center justify-start
        px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[12rem] py-[100px]'>
            <h2 className='sm:max-w-[390px] font-medium text-center text-[35px] leading-[50px]'>
                Huge Global Network of Fast VPN
            </h2>
            <p className='sm:max-w-[555px] text-center'>
                See LaslesVPN everywhere to make it easier for you when you move locations.
            </p>
            <div className='flex items-center justify-center'>
                <img src="word.PNG" alt="globe world" className='w-[1050px] h-[500px] object-contain ' />
            </div>
            <div className="flex items-center sm:items-start justify-start flex-wrap gap-4 flex-col sm:flex-row ">
                <div className='flex items-center justify-start h-[90px] w-[150px]'>
                    <img src="/icons/adidas.png" alt="adidas.png" className='object-contain' />
                </div>
                <div className='flex items-center justify-start h-[90px] w-[150px]'>
                    <img src="/icons/asus.png" alt="adidas.png" className='object-contain' />
                </div>
                <div className='flex items-center justify-start h-[90px] w-[150px]'>
                    <img src="/icons/bolt.png" alt="adidas.png" className='object-contain' />
                </div>
                <div className='flex items-center justify-start h-[90px] w-[150px]'>
                    <img src="/icons/skype.png" alt="adidas.png" className='object-contain' />
                </div>
            </div>
    </section>
  )
}

export default Global