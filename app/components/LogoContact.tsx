import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineComment } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

export default function LogoContact(){
  return(
   
    <div className="w-85/100 h-[100px] flex justify-between mx-auto border-b-[1px] border-gray-300  ">
      <Link href="/" className="h-[60px] my-auto">
        <img src="/logo.svg" alt="company logo" className="h-[60px] my-auto" />
      </Link>  
      <ul className="flex gap-[35px] my-auto ">

        <li><button className=" flex text-[15px] border px-[10px] py-[7px] rounded-3xl hover:bg-[#0090ca] hover:text-white transition "><TfiEmail className=" text-[16px] mt-1 mr-1.5"/>info@unicohospitals.com</button></li>

        <li><button className=" flex text-[15px] border px-[10px] py-[7px] rounded-3xl hover:bg-[#0090ca] hover:text-white transition"> <IoCallOutline className=" text-[18px] mt-0.5 mr-1.5"/>096 77 66 11 66 </button></li>

        <li><button className=" flex bg-[#0090ca] text-[16px] text-amber-50 px-[25px] py-[6px] rounded-3xl hover:bg-[#31b3a4] hover:text-white transition ">Ask a Question <AiOutlineComment className=" text-[26px] mt- ml-1.5"/> </button></li>

        <li><button className="bg-[#0090ca] text-[16px] text-amber-50 px-[6px] py-[6px] rounded-full hover:bg-[#31b3a4] hover:text-white transition "><HiOutlineSearch className="text-2xl"/> </button></li>

        <li><button className="bg-[#0090ca] text-[16px] text-amber-50 px-[6px] py-[6px] rounded-full hover:bg-[#31b3a4] hover:text-white transition"><CgProfile className="text-2xl" /></button></li>
      </ul>
    </div> 
    
  )
}