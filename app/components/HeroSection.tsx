import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


export default function(){
    return(
        
            < div className=" w-full h-190 bg-cover bg-center bg-no-repeat flex items-end" style={{backgroundImage: "url('/Home_Banner.jpeg')"}}>
                
                
                    <div className="w-full h-[120px] flex">

                        {/* Item */}
                        <Link href="/doctors" className="flex-1 flex items-center justify-between px-6 backdrop-blur-md bg-white/1 border-r border-white/30 group">
                            <div>
                            <h3 className="text-white font-semibold">Find a Doctor</h3>
                            <p className="text-white/80 text-sm">Unparalleled care from compassionate doctors</p>
                            </div>
                            <FaArrowRight className="w-8 h-8 p-2.5 text-gray-600 rounded-full bg-white group-hover:text-white group-hover:bg-[#0090ca] transition duration-500"
                            />
                        </Link>

                        {/* Item */}
                        <Link href="/contact" className="flex-1 flex items-center justify-between px-6 backdrop-blur-md bg-white/1 border-r border-white/30 group">
                            <div>
                            <h3 className="text-white font-semibold">Locate Us</h3>
                            <p className="text-white/80 text-sm">Easily find our hospital location and directions.</p>
                            </div>
                            <FaArrowRight className="w-8 h-8 p-2.5 text-gray-600 rounded-full bg-white group-hover:text-white group-hover:bg-[#0090ca] transition duration-500"
                            />
                        </Link>

                        {/* Item */}
                        <div className="flex-1 flex items-center justify-between px-6 backdrop-blur-md bg-white/1 border-r border-white/30 group">
                            <div>
                            <h3 className="text-white font-semibold">Career with Unico</h3>
                            <p className="text-white/80 text-sm">Comprehensive services tailored to your needs.</p>
                            </div>
                            <FaArrowRight className="w-8 h-8 p-2.5 text-gray-600 rounded-full bg-white group-hover:text-white group-hover:bg-[#0090ca] transition duration-500"
                            />
                        </div>

                        {/* Item */}
                        <Link href="/contact" className="flex-1 flex items-center justify-between px-6 backdrop-blur-md bg-white/1 border-r border-white/30 group">
                            <div>
                            <h3 className="text-white font-semibold">Book an Appointment</h3>
                            <p className="text-white/80 text-sm">Custom health packages designed just for you.</p>
                            </div>
                            <FaArrowRight className="w-8 h-8 p-2.5 text-gray-600 rounded-full bg-white group-hover:text-white group-hover:bg-[#0090ca] transition duration-500"
                            />
                        </Link>

                        {/* Emergency */}
                        <div className="w-[300px] bg-[#0090ca] text-white flex flex-col justify-center px-6">
                            <h3 className="text-sm">Emergency Hotline</h3>
                            <p className="text-2xl font-bold">096 77 66 77 66</p>
                        </div>

                    </div>
                
            </div>

        
    )
}