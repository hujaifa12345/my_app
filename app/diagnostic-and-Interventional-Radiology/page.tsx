import LogoContact from "../components/LogoContact"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Link from "next/link"
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineComment } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";




export default function(){



    return(
        <main>
            <LogoContact/>
            <NavBar/>

            <div className=" flex flex-col justify-between px-40 py-10 text-white w-full h-97.5 bg-no-repeat bg-cover bg-center" 
                style={{backgroundImage: "url('/diagnostic-and-Interventional-Radiology-Banner.jpeg')"}}>
                <div className="text-white text-medium flex items-center gap-2">
                    <Link href="/" className="text-gray-400">Home</Link>
                    <span className="font-bold">•</span>
                    <Link href="/department" className="text-gray-400">Department</Link>
                    <span className="font-bold">•</span>
                    <span className=" font-medium">Diagnostic and Interventional Radiology</span>
                </div>

                <div>
                    <h1 className="text-5xl font-bold">Diagnostic and Interventional Radiology</h1>

                    <br />

                    <p>Precise imaging and minimally invasive treatments.
                    </p>
                </div>
            </div>

            <div className="w-[85%] mx-auto my-15 h-250 ">
                <div className="flex gap-0.5 border-b border-b-[#0090ca] [&>span]:text-[18px] [&>span]:text-white [&>span]:tracking-wide [&>span]:font-bold [&>span]:px-6 [&>span]:py-2.5 [&>span]:bg-[#0090ca] [&>span]:rounded-t-md [&>span]:hover:bg-[#31b3a4] [&>span]:transition [&>span]:duration-300">
                    <span>Department Overview</span>
                    <span>Department Doctors</span>
                </div>

                <div className="flex min-h-250 my-18 text-gray-800 ">
                    <div className="w-[33%] flex flex-col gap-7">
                        <Link 
                        href="/"
                        className="flex gap-2 group" 
                        ><IoIosArrowBack className="text-white h-6 w-6 p-1 bg-[#0090ca] rounded-full group-hover:bg-[#31b3a4] transition duration-300"/> 
                        <span className="font-bold mt-0.5">Go Back</span>
                        </Link>
                    
                        <Link 
                        href="/contact" 
                        className=" flex w-35 text-[16px] text-amber-50 px-6.25 py-1.5 bg-[#0090ca]  rounded-3xl hover:bg-[#31b3a4] hover:text-white transition ">
                        Contact
                        <AiOutlineComment className=" text-[26px] ml-2"/> 
                        </Link>

                        <h2 className="text-gray-400">Share</h2>
                        <ul className="flex gap-3 -mt-6">
                            <li>
                                <a
                                    href="https://www.facebook.com/ioniccorporation"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-7 w-7 flex items-center justify-center text-white border bg-[#0090ca] border-[#0090ca] rounded-full hover:bg-[#31b3a4] hover:border-[#31b3a4] duration-400"
                                    >
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-7 w-7 flex items-center justify-center text-white border bg-[#0090ca] border-[#0090ca] rounded-full hover:bg-[#31b3a4] hover:border-[#31b3a4] duration-400"
                                    >
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-7 w-7 flex items-center justify-center text-white border bg-[#0090ca] border-[#0090ca] rounded-full hover:bg-[#31b3a4] hover:border-[#31b3a4] duration-400"
                                    >
                                    <FaLinkedinIn />
                                </a>
                            </li> 
                            <li>
                                <a
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-7 w-7 flex items-center justify-center text-white border bg-[#0090ca] border-[#0090ca] rounded-full hover:bg-[#31b3a4] hover:border-[#31b3a4] duration-400"
                                    >
                                    <FaYoutube />
                                </a>
                            </li>   
                        
                                                    
                        </ul>
                    </div>

                    <div className="flex flex-col gap-7 w-[67%] ">
                        
                    </div>

                </div>
            </div>

            <Footer/>
        </main>
    )
}