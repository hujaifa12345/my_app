'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";


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
          .then((res)=> res.json())
          .then((data)=> setDoctors(data))
    }, [])




    return(
        <div className=" flex flex-col justify-center items-center w-[85%] h-200 mx-auto ">
            <div className="flex justify-between h-[30%] w-full pb-6 border-t border-gray-700">
                <div className="my-auto">
                     <p className="text-gray-700">Doctors</p><br />
                     <h2 className="text-4xl font-bold my-7">Meet the experts who care for you</h2>
                     <p>Our doctors understand that healthcare is personal, and they take the time to get to know each patient, listen to their <br /> concerns, and involve them in every step of their care journey.</p>
                </div>
                <div className="flex items-end mb-7">
                    <IoIosArrowBack className="  mr-5 h-9.5 w-9.5 rounded-full p-3 text-white bg-[#0090ca] hover:bg-[#31b3a4] transition duration-100"/>
                    <IoIosArrowForward className="  mr-5 h-9.5 w-9.5 rounded-full p-3 text-white bg-[#0090ca] hover:bg-[#31b3a4] transition duration-100"/>
                    <Link href="/doctors" className="flex text-[15px] px-7 py-2 bg-[#0090ca] text-white font-bold rounded-3xl hover:bg-[#31b3a4] transition ">All Doctors <IoMdArrowForward className="  mt-1 ml-2" /></Link>
                </div>
            </div> 
            <div className="h-[40%] w-full overflow-visible">
                <div className="flex justify-between h-full">
                     {doctors.slice(0, 6).map((doc)=>(
                        <div 
                         key={doc.id}
                         className="h-full w-60 bg-[#0B3C66] text-white text-center px-6 py-6 rounded-xl hover:scale-104 transition duration-300"
                        >
                         
                            <img 
                                src={doc.image}
                                alt={doc.name} 
                                className="w-45 h-45 mx-auto rounded-full object-cover"
                            />

                            <p className="text-sm mt-3 text-gray-300">
                                {doc.department}
                            </p>

                            <h3 className="font-semibold">
                                {doc.name}
                            </h3>

                            <p className="text-sm text-gray-300">
                                {doc.designation}
                            </p>

                        </div>
                    ))} 
                </div>
            </div>
        </div>
    )
}