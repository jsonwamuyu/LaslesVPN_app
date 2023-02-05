const Suscribe = () =>{
    return(
        <section className="flex flex-col z-100 sm:flex-row items-center  sm:justify-between mb-[10rem]
        bg-white shadow-lg  lg:max-w-[1140px] -mt-[80px] space-y-6 
        sm:space-y-0 w-[90%] mx-auto p-9
        ">
            <div className="flex flex-col space-y-3 items-center justify-center sm:items-start sm:justify-start">
                <h3 className="sm:max-w-[372px] leading-[45px] text-[35px] font-medium text-center sm:text-start">
                    Subscribe Now for Get Special Features!
                </h3>
                <p className="text-center sm:text-start">Let's subscribe with us and find the fun.</p>
            </div>
            <a href="" className="text-white bg-[#F53838] rounded-[10px] py-3 px-6 flex items-center justify-center
                hover:text-[#F53838] border hover:border-[#F53838] hover:bg-transparent transition-all duration-300 shadow-md">
                    Subscribe Now
                </a>
        </section>
    );
}

export default Suscribe;