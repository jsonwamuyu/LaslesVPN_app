import {BsFacebook, BsTwitter, BsInstagram} from "react-icons/bs"
import {AiOutlineFacebook} from "react-icons/ai"

const Footer = () =>{
    return(
        <footer className="bg-[#f8f8f8] w-full py-[150px] -mt-[240px]">
            <section className=" w-[95%] mx-auto sm:w-[90%] md:w-[88%] lg:w-[85%] flex flex-col sm:flex-row
            justify-start items-center sm:items-start">
                <div className="flex flex-col space-y-4 items-center sm:items-start justify-start">
                    <div className='flex space-x-2 justify-center items-center'>
                        <div className="flex flex-row">
                            <div className='h-6 w-6 bg-[#F53838] rounded-full'/>
                            <div className='h-6 w-6 bg-[#0B132A] rounded-full z-10 -ml-3 border-white border-[1.4px]'/>
                            <div className='h-6 w-6 bg-[#F53838] rounded-full -ml-3'/>
                        </div>
                        <h3 className='text-[20px] leading-[24px] font-medium'>Lasles<span  className='font-bold'>VPN</span></h3>
                    </div>
                    <p className="sm:max-w-[300px]">LaslesVPN is a private virtual network that has unique features and has high security.</p>
                    <div className="flex items-start justify-start space-x-4">
                        <div className="h-10 w-10 rounded-full bg-white cursor-pointer hover:border hover:border-[#F53838] flex items-center justify-center">
                            <AiOutlineFacebook className="h-[60%] w-[60%] text-[#F53838] object-contain" />
                        </div>
                        <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:border hover:border-[#F53838] ">
                            <BsTwitter className="h-[60%] w-[60%] text-[#F53838] object-contain" />
                        </div>
                        <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:border hover:border-[#F53838] ">
                            <BsInstagram className="h-[60%] w-[60%] text-[#F53838] object-contain" />
                        </div>
                    </div>
                    <p className="font-normal pt-5 text-[#AFB5C0]">©2020LaslesVPN</p>
                </div>
                <div className="flex flex-col justify-start items-start space-y-4">
                    <h5 className="font-medium text-[18px] leading-[30px]">Product</h5>
                    <ul className="flex flex-col space-y-2">
                        <li className="font-normal"><a href="">Download</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Locations</a></li>
                        <li><a href="">Server</a></li>
                        <li><a href="">Country</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>
                <div className="flex flex-col justify-start items-start space-y-4">
                    <h5 className="font-medium text-[18px] leading-[30px]">Product</h5>
                    <ul className="flex flex-col space-y-2">
                        <li><a href="">LaslesVPN ? </a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Tuitorials</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Service</a></li>
                    </ul>
                </div>
                <div className="flex flex-col justify-start items-start space-y-4">
                    <h5 className="font-medium text-[18px] leading-[30px]">Product</h5>
                    <ul className="flex flex-col space-y-2">
                        <li><a href="">Affliate</a></li>
                        <li><a href="">Become a Patner</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;