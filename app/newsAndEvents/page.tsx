import Link from "next/link";
import LogoContact from "../components/LogoContact";
import NavBar from "../components/NavBar";
import { IoIosArrowDown } from "react-icons/io";
import Footer from "../components/Footer";





export default function NewsAndEvents(){


    return(
        <div>
            <LogoContact/>
            <NavBar/>
            <div className=" flex flex-col justify-between px-40 py-10 text-white w-full h-97.5 bg-no-repeat bg-cover bg-center" 
                style={{backgroundImage: "url('/News-&-Evebts-Banner.jpeg')"}}>
                <div className="text-white text-medium flex items-center gap-2">
                    <Link href="/" className="text-gray-400">Home</Link>
                    <span className="font-bold">•</span>
                    <span className=" font-medium">News & Events</span>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">News & Events</h1>
                    <br />
                    <p>Stay informed with the latest news, important updates, and <br /> upcoming events happening at Unico Hospital.</p>
                </div>
            </div> 

            <div className="flex items-center h-35 w-[85%] mx-auto ">
                <div className="flex items-center px-5 border rounded-full">
                <input 
                    type="text" 
                    placeholder="Select Category"
                    className="h-9 w-55 outline-0" 
                    />
                    <IoIosArrowDown />
                </div>
            </div>








            <div className="grid grid-cols-4 gap-4 w-[85%] mx-auto mb-50 ">

                <div className="w-98 min-h-100 max-h-130 overflow-hidden ">
                    <img 
                    src="/News-image.jpeg" 
                    alt="News Image" 
                    className="w-full hover:scale-105 transition duration-800"
                    />
                    <div className="flex justify-between text-gray-400 my-3">
                        <span>Events</span>
                        <span>09 Apr, 2026</span>
                    </div>
                    <h3 className="font-bold text-gray-800">
                        Unico Hospital Launches Senior Citizen Care Program
                    </h3>
                </div>

                <div className="w-98 min-h-100 max-h-130 overflow-hidden ">
                    <img 
                    src="/News-image.jpeg" 
                    alt="News Image" 
                    className="w-full hover:scale-105 transition duration-800"
                    />
                    <div className="flex justify-between text-gray-400 my-3">
                        <span>Events</span>
                        <span>09 Apr, 2026</span>
                    </div>
                    <h3 className="font-bold text-gray-800">
                        Unico Hospital Launches Senior Citizen Care Program
                    </h3>
                </div>

                <div className="w-98 min-h-100 max-h-130 overflow-hidden ">
                    <img 
                    src="/News-image.jpeg" 
                    alt="News Image" 
                    className="w-full hover:scale-105 transition duration-800"
                    />
                    <div className="flex justify-between text-gray-400 my-3">
                        <span>Events</span>
                        <span>09 Apr, 2026</span>
                    </div>
                    <h3 className="font-bold text-gray-800">
                        Unico Hospital Launches Senior Citizen Care Program
                    </h3>
                </div>

                <div className="w-98 min-h-100 max-h-130 overflow-hidden ">
                    <img 
                    src="/News-image.jpeg" 
                    alt="News Image" 
                    className="w-full hover:scale-105 transition duration-800"
                    />
                    <div className="flex justify-between text-gray-400 my-3">
                        <span>Events</span>
                        <span>09 Apr, 2026</span>
                    </div>
                    <h3 className="font-bold text-gray-800">
                        Unico Hospital Launches Senior Citizen Care Program
                    </h3>
                </div>

                <div className="w-98 min-h-100 max-h-130 overflow-hidden ">
                    <img 
                    src="/News-image.jpeg" 
                    alt="News Image" 
                    className="w-full hover:scale-105 transition duration-800"
                    />
                    <div className="flex justify-between text-gray-400 my-3">
                        <span>Events</span>
                        <span>09 Apr, 2026</span>
                    </div>
                    <h3 className="font-bold text-gray-800">
                        Unico Hospital Launches Senior Citizen Care Program
                    </h3>
                </div>

                <div className="w-98 min-h-100 max-h-130 overflow-hidden ">
                    <img 
                    src="/News-image.jpeg" 
                    alt="News Image" 
                    className="w-full hover:scale-105 transition duration-800"
                    />
                    <div className="flex justify-between text-gray-400 my-3">
                        <span>Events</span>
                        <span>09 Apr, 2026</span>
                    </div>
                    <h3 className="font-bold text-gray-800">
                        Unico Hospital Launches Senior Citizen Care Program
                    </h3>
                </div>
            </div>

            <Footer/>

        </div>
    )
}