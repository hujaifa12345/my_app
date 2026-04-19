"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdArrowForward } from "react-icons/io";




export default function NavBar(){

    const pathname = usePathname()

    



    return(
        <div className="sticky top-0 bg-white transition duration-1000 z-11">
            <ul className="flex items-center w-85/100 h-[65px] mx-auto justify-between [&>li]:text-gray-800 [&>li]:font-bold [&>li]:px-0 [&>li]:pt-5 [&>li]:h-16.75 [&>li]:text-[15px] [&>li]:hover:text-[#0090ca] [&>li]:hover:scale-106  ">
                <li>
                    <Link 
                    href="/" 
                    className={`${pathname === "/" ? "text-[#0090ca] text-[16px]" : "text-gray-800"} hover:text-[#0090ca]`}
                    >Home
                    </Link>
                </li>

                <li>
                    <Link href="/doctors"
                    className={`${pathname === "/doctors" ? "text-[#0090ca] text-[16px]" : "text-gray-800"} hover:text-[#0090ca]`}
                    >Doctors 
                    </Link>
                </li>

                <li className="relative group">
                    <Link href="/department"
                    className={`${pathname === "/department" ? "text-[#0090ca] text-[16px]" : "text-gray-800"} hover:text-[#0090ca]`}
                    >Department
                    </Link>
                    <div className="absolute -left-124 w-454.5 mt-5 py-7  h-180 text-gray-500 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 ">

                        <div className="flex justify-between w-[85%] mx-auto h-[88%] [&>ul>li]:my-5 [&>ul>li]:hover:text-[#0090ca]">
                            
                            <ul>
                                <li>Diagnostic and Interventional Radiology</li>
                                <li>Anesthesiology</li>
                                <li>Cardiothoracic & Vascular Surgery</li>
                                <li>Clinical & Interventional Cardiology</li>
                                <li>Neuromedicine & Interventional Neurology</li>
                                <li>Diabetes & Endocrinology</li>
                                <li>Dermatology & Venereology</li>
                                <li>Diagnostic and Interventional Radiology</li>
                                <li>Critical Care Medicine</li>
                                <li>Clinical Hematology</li>
                            </ul>

                            <ul>
                                <li>Diagnostic and Interventional Radiology</li>
                                <li>Anesthesiology</li>
                                <li>Cardiothoracic & Vascular Surgery</li>
                                <li>Clinical & Interventional Cardiology</li>
                                <li>Neuromedicine & Interventional Neurology</li>
                                <li>Diabetes & Endocrinology</li>
                                <li>Dermatology & Venereology</li>
                                <li>Diagnostic and Interventional Radiology</li>
                                <li>Critical Care Medicine</li>
                                <li>Clinical Hematology</li>
                            </ul>

                            <ul>
                                <li>Diagnostic and Interventional Radiology</li>
                                <li>Anesthesiology</li>
                                <li>Cardiothoracic & Vascular Surgery</li>
                                <li>Clinical & Interventional Cardiology</li>
                                <li>Neuromedicine & Interventional Neurology</li>
                                <li>Diabetes & Endocrinology</li>
                                <li>Dermatology & Venereology</li>
                                <li>Diagnostic and Interventional Radiology</li>
                                <li>Critical Care Medicine</li>
                                <li>Clinical Hematology</li>
                            </ul>

                        </div>

                        <div className="flex items-center justify-between w-[85%] mx-auto h-[12%] border-t border-t-gray-300">

                            <h2>
                                We have <span className="text-[#0090ca]">28 departments</span> offering a wide variety of medical services.
                            </h2> 

                            <button 
                            className="flex text-[15px] px-7 py-2 bg-[#0090ca] text-white font-bold rounded-3xl hover:bg-[#31b3a4] transition"
                            >
                            All Departments 
                            <IoMdArrowForward className="  mt-1 ml-2" />
                            </button>

                        </div>

                    </div>
                </li>

                <li className="relative group">
                    Services
                    <div className="absolute -left-176.5 w-456.5 mt-5 py-7  h-180 text-gray-500 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-auto">

                        <div className="flex justify-between w-[85%] mx-auto h-[88%] [&>ul>li]:my-5 [&>ul>li]:hover:text-[#0090ca]">
                            
                            <ul>
                                <li>Diagnostic and Interventional Radiology</li>
                                <li>Anesthesiology</li>
                                <li>Cardiothoracic & Vascular Surgery</li>
                                <li>Clinical & Interventional Cardiology</li>
                                <li>Neuromedicine & Interventional Neurology</li>
                                <li>Diabetes & Endocrinology</li>
                                <li>Dermatology & Venereology</li>
                                <li>Diagnostic and Interventional Radiology</li>
                                <li>Critical Care Medicine</li>
                                <li>Clinical Hematology</li>
                            </ul>

                            <ul>
                                <li>Diagnostic and Interventional Radiology</li>
                                <li>Anesthesiology</li>
                                <li>Cardiothoracic & Vascular Surgery</li>
                                <li>Clinical & Interventional Cardiology</li>
                                <li>Neuromedicine & Interventional Neurology</li>
                                <li>Diabetes & Endocrinology</li>
                                <li>Dermatology & Venereology</li>
                                <li>Diagnostic and Interventional Radiology</li>
                                <li>Critical Care Medicine</li>
                                <li>Clinical Hematology</li>
                            </ul>

                            <ul>
                                <li></li>     
                            </ul>

                        </div>

                        <div className="flex items-center justify-between w-[85%] mx-auto h-[12%] border-t border-t-gray-300">

                            <h2>
                                We have <span className="text-[#0090ca]">28 departments</span> offering a wide variety of medical services.
                            </h2> 

                            <button 
                            className="flex text-[15px] px-7 py-2 bg-[#0090ca] text-white font-bold rounded-3xl hover:bg-[#31b3a4] transition"
                            >
                            All Departments 
                            <IoMdArrowForward className="  mt-1 ml-2" />
                            </button>

                        </div>

                    </div>
                </li>

                <li>
                    <Link href="/packages"
                    className={`${pathname === "/packages" ? "text-[#0090ca] text-[16px]" : "text-gray-800"} hover:text-[#0090ca]`}
                    >Packages 
                    </Link>
                </li>

                <li>
                    <Link href="/newsAndEvents"
                    className={`${pathname === "/newsAndEvents" ? "text-[#0090ca] text-[16px]" : "text-gray-800"} hover:text-[#0090ca]`}
                    >News & Events
                    </Link>
                </li>

                <li>
                    <Link href="/gallery"
                    className={`${pathname === "/gallery" ? "text-[#0090ca] text-[16px]" : "text-gray-800"} hover:text-[#0090ca]`}
                    >Gallery 
                    </Link>
                </li>

                <li>
                    <Link href="/contact"
                    className={`${pathname === "/contact" ? "text-[#0090ca] text-[16px]" : "text-gray-800"} hover:text-[#0090ca]`}
                    >Contact 
                    </Link>
                </li>

                <li>
                    <Link 
                        href="/about"
                        className={`${pathname === "/about" ? "text-[#0090ca] text-[16px]" :"text-gray-800"} hover:text-[#0090ca]` }
                        >
                        About
                    </Link>
                    
                </li>
            </ul>
        </div>
    )
}