import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";






export default function NewsAndEvents(){




return(
    <div className=" flex flex-col mx-auto h-230 w-[85%] mt-18">
        <div className="flex justify-between items-center w-full h-50 ">
            <div className="h-full">
                 <p className="text-[15px] text-gray-600 mt-4">News & Events</p>
                 <h1 className="text-5xl font-bold mt-7">Insights from Unico</h1>
            </div>

            <Link href="/newsAndEvents" className="flex text-[15px] h-10 items-center px-6 mb-6 bg-[#0090ca] text-white font-bold rounded-3xl hover:bg-[#31b3a4] transition ">All Articles<IoMdArrowForward className=" flex my-auto ml-2" /></Link>
        </div>

        <div className="h-180 w-full ">
            <ul className="flex justify-between h-full w-full [&>li]:max-h-full [&>li]:w-[24%] [&_div]:rounded-md ">
                <li>
                    <div className="w-full max-h-[70%] min-h-[50%] overflow-hidden">
                        <img src="/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg" alt="" className=" w-full hover:scale-105  duration-500"/>
                    </div>
                    <div className="flex justify-between my-3">
                        <h2 className="font-bold ">Tofazzal Hossain</h2>
                        <h2>Date & Time</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, perferendis?</p>
                </li>

                <li>
                        <div className="w-full max-h-[70%] min-h-[50%] overflow-hidden">
                            <img src="/what-is-ambulatory-care-nursing.jpg" alt="" className=" w-full hover:scale-105 duration-500"/>
                        </div>
                    <div className="flex justify-between my-3">
                        <h2 className="font-bold ">Billal Shikdar</h2>
                        <h2>Date & Time</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, perferendis?</p>
                </li>

                <li>
                        <div className="w-full max-h-[70%] min-h-[50%] overflow-hidden">
                            <img src="/Screenshot 2026-03-29 145631.png" alt="" className=" w-full hover:scale-105 duration-500"/>
                        </div>
                    <div className="flex justify-between my-3">
                        <h2 className="font-bold ">Mufidul Islam</h2>
                        <h2>Date & Time</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, perferendis?</p>
                </li>

                <li>
                        <div className="w-full max-h-[70%] min-h-[50%] overflow-hidden">
                            <img src="/self-care-for-nurses.jpg" alt="" className=" w-full hover:scale-105 duration-500"/>
                        </div>
                    <div className="flex justify-between my-3">
                        <h2 className="font-bold ">Fatima Tabassum</h2>
                        <h2>Date & Time</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, perferendis?</p>
                </li>
                
            </ul>

        </div>

    </div>
)
}