import React from 'react'

const Customers = () => {
  return (
    <section className='sm:px-[3rem] sm:space-x-8 justify-start
    md:px-[6rem] lg:px-[12rem] items-center flex flex-col space-y-8 py-[70px]'>
        <h2 className='leading-[50px] text-[35px] font-medium sm:max-w-[450px] text-center'>Trusted by Thousands of Happy Customer</h2>
        <p className='text-[1rem] leading-[30px] font-normal sm:max-w-[555px] text-center'>
            These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
        <div className='items-center flex justify-center flex-col space-y-8 sm:space-y-0 sm:flex-row sm:space-x-8'>
            <article className='w-full sm:w-[400px] sm:h-[230px] space-y-4 bg-white rounded-[10px] p-[30px] border-[2px] border-[#F53838]'>
                <div className='flex justify-between flex-row'>
                    <div className='flex flex-row space-x-4 items-start justify-start'>
                        <div className='flex items-center justify-center'>
                            <img src="/lady3.jpg" alt="" className='rounded-full h-[30px] w-[30px] object-cover'/>
                        </div>
                        <div className='flex flex-col space-y-2 items-center text-center'>
                            <h4 className='text-[18px] leading-[30px] font-medium'>Viezh Robert</h4>
                            <p className='text-[14px] leading-[30px]'>Warsaw, Poland</p>
                        </div>
                    </div>
                    <div>starz</div>
                </div>
                <p className='sm:max-w-[350px] '>
                    “Wow... I am very happy to use this VPN, it turned out to be more than my expectations
                     and so far there have been no problems. LaslesVPN always the best”.
                </p>
            </article>
        </div>
    </section>
  )
}

export default Customers