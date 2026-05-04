"use client";

import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineComment } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LogoContact(){

  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(()=>{
    const user = localStorage.getItem("usr")
    if(user) setIsLoggedIn(true)
  },[])

  const handleLogout = () => {
    localStorage.removeItem("usr")
    setIsLoggedIn(false)
    setShowModal(false)
    router.push("/logInPage")
  }

  return(
    <div className="w-85/100 h-[100px] flex justify-between mx-auto border-b-[1px] border-gray-300">
      <Link href="/" className="h-[60px] my-auto">
        <img src="/logo.svg" alt="company logo" className="h-[60px] my-auto" />
      </Link>  

      {/* Logout Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl px-8 py-6 flex flex-col items-center gap-4 shadow-lg">
            <AiOutlineUser className="text-5xl text-[#0090ca]"/>
            <h2 className="text-lg font-semibold">Are you sure you want to logout?</h2>
            <div className="flex gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 border border-gray-400 rounded-full hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      <ul className="flex gap-[35px] my-auto">

        <li>
          <button className="flex text-[15px] border px-[10px] py-[7px] rounded-3xl hover:bg-[#0090ca] hover:text-white transition">
            <TfiEmail className="text-[16px] mt-1 mr-1.5"/>info@unicohospitals.com
          </button>
        </li>

        <li>
          <button className="flex text-[15px] border px-[10px] py-[7px] rounded-3xl hover:bg-[#0090ca] hover:text-white transition">
            <IoCallOutline className="text-[18px] mt-0.5 mr-1.5"/>096 77 66 11 66
          </button>
        </li>

        <li>
          <button className="flex bg-[#0090ca] text-[16px] text-amber-50 px-[25px] py-[6px] rounded-3xl hover:bg-[#31b3a4] hover:text-white transition">
            Ask a Question <AiOutlineComment className="text-[26px] ml-1.5"/>
          </button>
        </li>

        <li>
          <Link href="/000" className="flex items-center justify-center h-9 w-9 bg-[#0090ca] text-[16px] text-amber-50 rounded-full hover:bg-[#31b3a4] hover:text-white transition">
            <HiOutlineSearch className="text-2xl"/>
          </Link>
        </li>

        <li>
          {isLoggedIn ? (
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center justify-center h-9 w-9 bg-[#0090ca] text-[16px] text-white rounded-full hover:bg-red-600 transition"
            >
              <AiOutlineUser className="text-2xl"/>
            </button>
          ) : (
            <Link
              href="/logInPage"
              className="flex items-center justify-center h-9 w-9 bg-[#0090ca] text-[16px] text-amber-50 rounded-full hover:bg-[#31b3a4] hover:text-white transition"
            >
              <AiOutlineUser className="text-2xl"/>
            </Link>
          )}
        </li>

      </ul>
    </div> 
  )
}