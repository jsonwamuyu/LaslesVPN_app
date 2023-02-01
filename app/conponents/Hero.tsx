

const Hero = () => {
    return(
        <main className="flex flex-col space-y-8 sm:space-y-0 sm:space-x-8 sm:flex-row w-full
        px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[12rem] items-center justify-center sm:pt-[100px] pb-[2rem]">
            <div className="flex flex-col space-y-[20px] sm:w-1/2">
                <h1 className="font-medium text-[50px] leading-[70px] sm:max-w-[555px]">
                    Want anything to be easy with LaslesVPN.</h1>
                <p className="sm:max-w-[555px] pb-8">
                    Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                <a href="" className="text-white bg-[#F53838] rounded-[10px] h-[50px] w-[220px] flex items-center justify-center
                hover:text-[#F53838] border hover:border-[#F53838] hover:bg-transparent transition-all duration-300 shadow-md">Get Started</a>
            </div>
            <div className="flex sm:w-1/2 bg-blue-400 items-center justify-center">
                <img src="/heero.png" alt="hero section"  className="w-full object-contain"/>
            </div>
        </main>
    )
}

export default Hero;