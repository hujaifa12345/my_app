"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LogInPage() {
  const router = useRouter();

  const [usr,setUsr] = useState("");
  const [pwd , setPwd] = useState("");
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");

  const handleLogin = async ()=>{
    setLoading(true);
    setError("");

    try{
      const res = await fetch("/api/frappe/stadium_booking.api.auth.login_init",
        {
            method: "POST",
            credentials: "include",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({usr,pwd})
        }
      )
      const data = await res.json();
      console.log("LogIn Response:",data)

      if(res.ok){
        
        router.push("/login-verify-otp")

      } else{
        setError("Invalid credentials. Please try again.");
      };
    } catch(err){
        setError("Something went wrong. Please try again.")
    } finally{
        setLoading(false)
    }
  };

  return (
    <main
      className="flex items-center justify-center h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: "url('/login_bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="flex flex-col gap-5 items-center w-105 px-4 py-9 bg-white relative">
        <img src="/log-in-logo.png" alt="logo" className="w-52" />

        <h2 className="flex items-center justify-center h-9 w-full text-[14px] bg-gray-300">
          <span>Sign in</span>
        </h2>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm w-full text-center">{error}</p>
        )}

        <input
          type="text"
          placeholder="Enter your email"
          value={usr}
          onChange={(e) => setUsr(e.target.value)}
          className="w-full h-9 px-3 text-gray-700 outline-[#007C80] border-[1px] border-[#007C80]"
        />
        <input
          type="password"
          placeholder="Enter Your password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          className="w-full h-9 px-3 text-gray-700 outline-[#007C80] border-[1px] border-[#007C80]"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="text-white w-full h-9 bg-[#007C80] border border-[#007C80] hover:bg-white hover:text-[#007C80] rounded transition duration-200 disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </div>
    </main>
  );
}



// export default function LogInPage(){




//     return(
//         <main className="flex items-center justify-center h-screen w-full bg-cover bg-center relative " style={{backgroundImage: "url('/login_bg.jpg')"}}>
//             <div className="absolute inset-0 bg-black/40"></div>

//             <div className="flex flex-col gap-5 items-center  h-92 w-105 px-4 py-9 bg-white relative">
//                 <img src="/log-in-logo.png" alt="logo" className="w-52"/>
//                 <h2 className="flex items-center justify-center h-9 w-full text-[14px] bg-gray-300"><span>Sign in</span></h2>
//                 <input type="text" name="email" placeholder="Enter Your UHID" className="w-full h-9 px-3 text-gray-700 outline-[#007C80] border-[1px] outline-[#007C80] border-[#007C80]" />
//                 <input type="text" name="password" placeholder="Enter Your Registered Mobile No" className="w-full h-9 px-3 text-gray-700 outline-[#007C80] border-[1px] outline-[#007C80] border-[#007C80]" />
//                 <button className="text-white w-full h-9 bg-[#007C80] border border-[#007C80] hover:bg-white hover:text-[#007C80] rounded transition duration-200">Sign in</button>
//             </div>
//         </main>
//     )
// }