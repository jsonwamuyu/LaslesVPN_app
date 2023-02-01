import {HiUser,HiLocationMarker} from "react-icons/hi"


const Burnner = () =>{
    return(
        <section className="flex flex-col sm:flex-row w-full justify-between shadow-xl">
            <div className="flex items-center justify-center space-x-[36px]">
                <div className="rounded-full h-[55px] w-[55px] bg-[#FFECEC] flex items-center justify-center">
                    <HiUser className="h-[1rem] w-[18px] text-[#F53838]"/>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[25px] leading-[30px] font-bold">90+</h3>
                    <h4 className="text-[20px] font-normal leading-[30px]">Users</h4>
                </div>
            </div>
            <div className="flex items-center justify-center space-x-[36px] border-x-2">
                <div className="rounded-full h-[55px] w-[55px] bg-[#FFECEC] flex items-center justify-center">
                    <HiLocationMarker className="h-[1rem] w-[18px] text-[#F53838]"/>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[25px] leading-[30px] font-bold">90+</h3>
                    <h4 className="text-[20px] font-normal leading-[30px]">Locations</h4>
                </div>
            </div>
                        <div className="flex items-center justify-center space-x-[36px]">
                <div className="rounded-full h-[55px] w-[55px] bg-[#FFECEC] flex items-center justify-center">
                    <HiUser className="h-[1rem] w-[18px] text-[#F53838]"/>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[25px] leading-[30px] font-bold">90+</h3>
                    <h4 className="text-[20px] font-normal leading-[30px]">Users</h4>
                </div>
            </div>
            
        </section>
    ) 
}
export default Burnner;