import { IoMdArrowForward } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { MdLocalFireDepartment } from "react-icons/md";
import { LuPackageOpen } from "react-icons/lu";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";



export default function Footer(){



    return(
        <footer className=" flex flex-col justify-end items-center h-148 w-full bg-[#023059]">
            <div className="flex flex-col h-[80%] w-[85%] bg-">
                <div className=" flex w-full h-[78%] bg- border-b border-b-white/20 [&>div]:h-full [&>div]:w-[25%] ">
                    <div>
                        <h2 className="text-white/50 mb-3">Navigate</h2>
                        <ul className="flex flex-col gap-3 [&>li]:text-[14px] [&>li]:text-white [&>li]:font-bold">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>News & Events</li>
                            <li>Career</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-white/50 mb-3">For Patients</h2>
                        <ul className="flex flex-col gap-3 [&>li]:text-[14px] [&>li]:text-white [&>li]:font-bold">
                            <li>Our Services</li>
                            <li>Our Departments</li>
                            <li>Our Doctors</li>
                            <li>Our Packages</li>                           
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-white/50 mb-3">Visit Us</h2>
                        <ul className="flex flex-col gap-3 [&>li]:text-[14px] [&>li]:text-white [&>li]:font-bold">
                            <li>
                                <p>Unico Hospitals PLC. <br /> 23 Bir Uttam K. M. Shafiullah Sarak (Green Road) <br /> Dhaka-1205, Bangladesh
                                </p>
                            </li>                                                       
                        </ul>
                        <br />
                        <br />
                        <h2 className="text-white/50 mb-3">Contact Us</h2>
                        <ul className="flex flex-col gap-3 [&>li]:text-[14px] [&>li]:font-bold">
                            <li>
                                <ul className="[&>li]:text-white">
                                    <li>info@unicohospitals.com</li>
                                    <li>career@unicohospitals.com</li>
                                </ul>
                            </li> 
                            <li>
                                <ul className="[&>li]:text-white">
                                    <li>096 77 66 11 66</li>
                                    <li>096 77 66 11 66</li>
                                </ul>
                            </li>                          
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-4.5">
                            <li>
                                <button className="flex items-center text-[15px] h-11 w-[100%]  px-6 bg-white text-[#023059] font-bold rounded-full hover:text-white hover:bg-[#31b3a4] transition relative "><FaUserDoctor className="mr-2" />Find A Doctor <IoMdArrowForward className=" flex ml-my-auto absolute right-5 " />                           
                                </button>
                            </li>
                            <li>
                                <button className="flex items-center text-[15px] h-11 w-[100%]  px-6 bg-white text-[#023059] font-bold rounded-full hover:text-white hover:bg-[#31b3a4] transition relative "><MdLocalFireDepartment className="mr-2" />Explore Departments <IoMdArrowForward className=" flex ml-my-auto absolute right-5 " />                           
                                </button>
                            </li>
                            <li>
                                <button className="flex items-center text-[15px] h-11 w-[100%]  px-6 bg-white text-[#023059] font-bold rounded-full hover:text-white hover:bg-[#31b3a4] transition relative "><LuPackageOpen className="mr-2" />uratede Packages <IoMdArrowForward className=" flex ml-my-auto absolute right-5 " />                           
                                </button>
                            </li>                           
                        </ul>
                        <br />
                        <br />
                        <br />
                        <h2 className="text-white/50 mb-3">Follow Us</h2>
                        <ul className="flex gap-3">
                            <li>
                                <a
                                    href="https://www.facebook.com/ioniccorporation"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-7 w-7 flex items-center justify-center text-white border border-white rounded-full hover:bg-[#0090ca] hover:border-[#0090ca] duration-400"
                                    >
                                    <FaFacebookF />
                                    </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-7 w-7 flex items-center justify-center text-white border border-white rounded-full hover:bg-[#0090ca] hover:border-[#0090ca] duration-400"
                                    >
                                    <FaInstagram />
                                    </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-7 w-7 flex items-center justify-center text-white border border-white rounded-full hover:bg-[#0090ca] hover:border-[#0090ca] duration-400"
                                    >
                                    <FaLinkedinIn />
                                    </a>
                            </li> 
                            <li>
                                <a
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-7 w-7 flex items-center justify-center text-white border border-white rounded-full hover:bg-[#0090ca] hover:border-[#0090ca] duration-400"
                                    >
                                    <FaYoutube />
                                    </a>
                            </li>   

                            
                        </ul>
                    </div>
                </div>



                <div className="flex pt-7.5">

                    <div className="w-[25%]">
                        <img 
                        src="/unico-logo-white.png" 
                        alt="logo" 
                        className="h-10.5" 
                        />
                    </div>

                    <div className=" flex flex-col gap-2 w-[25%] text-[11px] text-white">
                        <h6>©2026 Unico Hospitals. All Rights Reserved</h6>
                        <a href=""   className="hover:text-[#0090ca] duration-400">Designed & Developed by Dcastalia </a>
                    </div>

                    <div className="w-[50%] text-white text-[11px]">
                        <p>Unico Hospitals PLC, established in June 2008 as a Public Limited Company, aims to create a   state-of-the-art, 250-bed multi-speciality hospital offering comprehensive healthcare services. 
                        </p>                      
                    </div>

                </div>
            </div>
        </footer>
    )

}