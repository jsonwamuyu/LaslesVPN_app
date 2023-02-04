import React from 'react'
import {HiArrowRight, HiArrowLeft} from 'react-icons/hi'

const Customers = () => {
  return (
    <section className='sm:px-[3rem] sm:space-x-8 justify-start px-[1rem] shadow-md
    md:px-[6rem] lg:px-[12rem] items-center flex flex-col space-y-8 pt-[70px] pb-[150px]'>
        <h2 className='leading-[50px] text-[35px] font-medium sm:max-w-[450px] text-center'>Trusted by Thousands of Happy Customer</h2>
        <p className='text-[1rem] leading-[30px] font-normal sm:max-w-[555px] text-center'>
            These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
        <div className='items-center flex justify-center flex-col space-y-8 sm:space-y-0 sm:flex-row sm:space-x-8'>
            <article className='w-full sm:w-[400px] sm:h-[250px] space-y-3 bg-white rounded-[10px] p-[30px] border-[2px] border-[#F53838]'>
                <div className='flex justify-between flex-row'>
                    <div className='flex flex-row space-x-4 items-start justify-start'>
                        <div className='flex items-center justify-center'>
                            <img src="/lady3.jpg" alt="" className='rounded-full h-[30px] w-[30px] object-cover'/>
                        </div>
                        <div className='flex flex-col space-y-1 items-center text-center'>
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
            <article className='w-full sm:w-[400px] sm:h-[250px] space-y-3 bg-white rounded-[10px] p-[30px] border-[2px] border-[#F53838]'>
                <div className='flex justify-between flex-row'>
                    <div className='flex flex-row space-x-4 items-start justify-start'>
                        <div className='flex items-center justify-center'>
                            <img src="/lady3.jpg" alt="" className='rounded-full h-[30px] w-[30px] object-cover'/>
                        </div>
                        <div className='flex flex-col space-y-1 items-center text-center'>
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
            <article className='w-full sm:w-[400px] sm:h-[250px] space-y-3 bg-white rounded-[10px] p-[30px] border-[2px] border-[#F53838]'>
                <div className='flex justify-between flex-row'>
                    <div className='flex flex-row space-x-4 items-start justify-start'>
                        <div className='flex items-center justify-center'>
                            <img src="/lady3.jpg" alt="" className='rounded-full h-[30px] w-[30px] object-cover'/>
                        </div>
                        <div className='flex flex-col space-y-1 items-center text-center'>
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
        <div className="flex items-center justify-between flex-col sm:flex-row ">
            <div></div>
            <div className='flex space-x-4 items-center justify-center'>
                <div className='hover:bg-[#F53838] text-[#F53838] cursor-pointer transition-all duration-200
                 hover:scale-[1.02] active:scale-[0.95] hover:text-white h-10 border border-[#F53838] w-10 rounded-full flex 
                 items-center justify-center bg-white'><HiArrowLeft/></div>
                <div className='bg-[#F53838] hover:bg-white cursor-pointer transition-all duration-200
                 hover:scale-[1.02] active:scale-[0.95] hover:text-[#F53838] border border-[#F53838] text-white h-10 w-10 rounded-full flex items-center justify-center'><HiArrowRight/></div>
            </div>
        </div>
    </section>
  )
}

export default Customers