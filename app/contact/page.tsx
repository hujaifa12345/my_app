import Link from "next/link";
import LogoContact from "../components/LogoContact"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";



export default function Contact(){


    return(
        <div>
            <LogoContact/>
            <NavBar/>

            <div className=" flex flex-col justify-between px-40 py-10 text-white w-full h-97.5 bg-no-repeat bg-cover bg-center" 
                style={{backgroundImage: "url('/Contact-Banner.jpeg')"}}>
                <div className="text-white text-medium flex items-center gap-2">
                    <Link href="/" className="text-gray-400">Home</Link>
                    <span className="font-bold">•</span>
                    <span className=" font-medium">Contact</span>
                </div>

                <div>
                    <h1 className="text-5xl font-bold">Contact us</h1>

                    <br />

                    <p>Get in touch with Unico Hospital for all your healthcare needs. We're here to <br /> assist you with any inquiries or support you may require.
                    </p>
                </div>
            </div>

            <div className="bg-[#f5f7f9] py-20 my-10 ">
                <div className="max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">

                    {/* LEFT SIDE */}
                    <div className="space-y-8 text-gray-700">
                    
                        <div>
                            <p className="text-sm text-gray-400 mb-2">Visit Us</p>
                            <p className="font-semibold">
                            Unico Hospitals PLC.<br />
                            23 Bir Uttam K. M. Shafiullah Sarak (Green Road)<br />
                            Dhaka-1205, Bangladesh
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400 mb-2">Contact Us</p>
                            <p className="font-semibold">
                            info@unicohospitals.com<br />
                            career@unicohospitals.com
                            </p>
                        </div>                                                                      

                        <div className="font-semibold">
                            <p>096 77 66 77 66</p>
                            <p>096 77 66 11 66</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400 mb-3">Follow Us</p>
                            <ul className="flex gap-3">
                                <li>
                                    <a
                                        href="https://www.facebook.com/ioniccorporation"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-7 w-7 flex items-center justify-center text-gray-800 border border-gray-800 rounded-full hover:bg-[#0090ca] hover:text-white hover:border-[#0090ca] duration-400"
                                        >
                                        <FaFacebookF />
                                        </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-7 w-7 flex items-center justify-center text-gray-800 border border-gray-800 rounded-full hover:bg-[#0090ca] hover:text-white hover:border-[#0090ca] duration-400"
                                        >
                                        <FaInstagram />
                                        </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-7 w-7 flex items-center justify-center text-gray-800 border border-gray-800 rounded-full hover:bg-[#0090ca] hover:text-white hover:border-[#0090ca] duration-400"
                                        >
                                        <FaLinkedinIn />
                                        </a>
                                </li> 
                                <li>
                                    <a
                                        href="https://www.youtube.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-7 w-7 flex items-center justify-center text-gray-800 border border-gray-800 rounded-full hover:bg-[#0090ca] hover:text-white hover:border-[#0090ca] duration-400"
                                        >
                                        <FaYoutube />
                                        </a>
                                </li>   

                                
                            </ul>
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-6">

                        {/* Input */}
                        <input type="text" placeholder="Your Name*"
                            className="w-full border-b border-gray-300 bg-transparent outline-none py-2" />

                        <div className="grid grid-cols-2 gap-6">
                            <input type="text" placeholder="Phone Number*"
                            className="border-b border-gray-300 bg-transparent outline-none py-2 w-full" />

                            <input type="email" placeholder="Email Address*"
                            className="border-b border-gray-300 bg-transparent outline-none py-2 w-full" />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="relative">
                            <input type="text" placeholder="Pick A Subject Of Enquiry"
                                className="w-full border-b border-gray-300 bg-transparent outline-none py-2 pr-6" />
                            <span className="absolute right-0 top-1/2 -translate-y-1/2">⌄</span>
                            </div>

                            <div className="relative">
                            <input type="text" placeholder="Department"
                                className="w-full border-b border-gray-300 bg-transparent outline-none py-2 pr-6" />
                            <span className="absolute right-0 top-1/2 -translate-y-1/2">⌄</span>
                            </div>
                        </div>

                        <textarea placeholder="Your Message"
                            className="w-full border-b border-gray-300 bg-transparent outline-none py-2 h-24 resize-none"></textarea>

                        {/* Buttons */}
                        <div className="flex items-center gap-6 pt-4">
                            
                            <button className="border border-[#0090ca] text-[#0090ca] px-6 py-2 rounded-full flex items-center gap-2">
                            Attach file +
                            </button>

                            <button className="bg-[#0090ca] text-white px-8 py-2 rounded-full flex items-center gap-2">
                            Submit Application →
                            </button>

                        </div>

                    </div>

                </div>
            </div>

            <a 
                href="https://www.google.com/maps/place/ইউনিকো+হাসপাতাল+পিএলসি/@23.7442823,90.3845342,19z/data=!4m6!3m5!1s0x3755b995177047e5:0xd4a9cd21f6b45763!8m2!3d23.7442541!4d90.3848829!16s%2Fg%2F11h5sm_0_z!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer" 
                className="w-full"
                >
            <img 
            src="Hospital's-Map.png" 
            alt="Hospital's Map" 
            className="w-full"
            />
            </a>

            <Footer/>
        </div>
        
        
    )
}