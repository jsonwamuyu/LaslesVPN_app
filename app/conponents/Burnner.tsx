import {HiUser,HiLocationMarker, HiServer} from "react-icons/hi"


const Burnner = () =>{
    return(
        <section className="flex  w-full  my-10 px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[12rem]">
            <div className="flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0
              shadow-lg w-full py-[3rem] bg-white rounded-[10px] h-full border">

                <div className="flex items-center justify-center space-x-[36px] h-full w-full sm:w-1/2">
                    <div className="rounded-full h-[55px] w-[55px] bg-[#FFECEC] flex items-center justify-center">
                        <HiUser className="h-[1.5rem] w-[20px] text-[#F53838]"/>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-[25px] leading-[30px] font-bold">90+</h3>
                        <h4 className="text-[20px] font-normal leading-[30px]">Users</h4>
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-[36px] border-x-2 h-full w-full sm:w-1/2">
                    <div className="rounded-full h-[55px] w-[55px] bg-[#FFECEC] flex items-center justify-center">
                        <HiLocationMarker className="h-[1.5rem] w-[20px] text-[#F53838]"/>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-[25px] leading-[30px] font-bold">90+</h3>
                        <h4 className="text-[20px] font-normal leading-[30px]">Locations</h4>
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-[36px] w-full h-full sm:w-1/2">
                    <div className="rounded-full h-[55px] w-[55px] bg-[#FFECEC] flex items-center justify-center">
                        <HiServer className="h-[1.5rem] w-[20px] text-[#F53838]"/>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-[25px] leading-[30px] font-bold">50+</h3>
                        <h4 className="text-[20px] font-normal leading-[30px]">Servers</h4>
                    </div>
                </div>
            </div>
            
        </section>
    ) 
}
export default Burnner;