"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";





export default function LogInVerifyOTP(){

    const router = useRouter();

    const [usr,setUsr] = useState("")
    const [otp, setOtp] = useState("");
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("")

    const sendOtp = async () => {
        if (!otp) {
            setError("Please enter OTP");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/frappe/stadium_booking.api.auth.login_verify_otp", {
            method: "POST",
            credentials: "include",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ usr,otp })
            });

            const data = await res.json();
            console.log("OTP response:", data);

            if (data.message?.success) {
                localStorage.setItem("usr",JSON.stringify(data.message.data))
                router.push("/");
            } else {
            setError(data.message?.message || "OTP verification failed");
            }

        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
        };




    return(
        <main className="flex items-center justify-center h-screen w-full bg-cover bg-center relative " style={{backgroundImage: "url('/login_bg.jpg')"}}>
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="flex flex-col gap-5 items-center w-105 px-4 py-9 bg-white relative">

                <img src="/log-in-logo.png" alt="logo" className="w-52"/>

                <h2 className="flex items-center justify-center h-9 w-full text-[14px] bg-gray-300"><span>Set OTP</span></h2>

                {error && (<p>{error}</p>)}

                <input 
                type="text" 
                value={usr}
                onChange={(e)=>setUsr(e.target.value)}
                placeholder="Enter Your Email" 
                className="w-full h-9 px-3 text-gray-700 outline-[#007C80] border-[1px] outline-[#007C80] border-[#007C80]" 
                />

                <input 
                type="text" 
                value={otp}
                onChange={(e)=>setOtp(e.target.value)}
                placeholder="Enter Your OTP" 
                className="w-full h-9 px-3 text-gray-700 outline-[#007C80] border-[1px] outline-[#007C80] border-[#007C80]" 
                />

                <button 
                onClick={sendOtp}
                className="text-white w-full h-9 bg-[#007C80] border border-[#007C80] hover:bg-white hover:text-[#007C80] rounded transition duration-200">
                    {loading?"Verifing OTP...":"Verify OTP"}
                </button>
            </div>
        </main>
    )
}