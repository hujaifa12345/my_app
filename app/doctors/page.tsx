"use client"

import Link from "next/link"
import LogoContact from "../components/LogoContact"
import NavBar from "../components/NavBar"
import { IoSearchSharp } from "react-icons/io5";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";





export default function Doctors(){

    type Doctors = {
        id: number;
        name: string;
        department: string;
        designation: string;
        image: string;
    }


    const [doctors, setDoctors] = useState<Doctors[]>([]);


    useEffect(()=>{
        fetch("/data/doctors.json")
        .then((res)=>res.json())
        .then((data)=>setDoctors(data))
    }, [])


    return(
        <div>
            <LogoContact/>
            <NavBar/>
            <div className=" flex flex-col justify-between px-40 py-10 text-white w-full h-97.5 bg-no-repeat bg-cover bg-center" 
                style={{backgroundImage: "url('/Doctors-banner.jpeg')"}}>
                <div className="text-white text-medium flex items-center gap-2">
                    <Link href="/" className="text-gray-400">Home</Link>
                    <span className="font-bold">•</span>
                    <span className=" font-medium">Doctors</span>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Doctors</h1>
                    <br />
                    <p>Meet our team of expert doctors dedicated to providing exceptional care and <br /> personalized treatment tailored to your health needs.</p>
                </div>
            </div> 

            <div className="w-[85%] mx-auto ">
                <div className=" flex items-center justify-between h-40 ">
                    
                        <div className="flex items-center px-5 border rounded-full">
                                <input 
                                     type="text" 
                                    placeholder="Select a Department"
                                    className="h-9 w-55 outline-0" 
                                />
                                <IoIosArrowDown />
                        </div>
                    
                    
                    <div className="flex items-center gap-2 text-white font-bold h-10 w-65 bg-[#023059] rounded-full px-3">
  
                        <IoSearchSharp className="text-white font-bold shrink-0" />

                        <input
                            type="text"
                            placeholder="Find a Doctor"
                            className="bg-transparent flex-1 outline-none placeholder:text-gray-300"
                        />
  
                    </div>
                    
                </div>
                <div className="grid grid-cols-4 gap-8 justify-around w-full mb-40">
                    {doctors.map((doc)=>(
                    <Link
                        href={`/doctors/${doc.id}`}
                        key={doc.id}
                        className="h-130 w-95 py-10 px-7 bg-[#0B3C66] rounded-md"
                        >
                        <img 
                            src={doc.image} 
                            alt={doc.name}
                            className="h-81 w-81 rounded-full" 
                        />
                        <br />
                        <span className="text-sm text-gray-400">{doc.department}</span>
                        <h2 className="text-white font-bold">{doc.name}</h2>
                        <span className="text-sm text-gray-400">{doc.designation}</span>
                    </Link>
                    ))}

                </div>
            </div> 
            <Footer/>
        </div>
        
    )
}