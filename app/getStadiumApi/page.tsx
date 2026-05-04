"use client";

import LogoContact from "../components/LogoContact";
import NavBar from "../components/NavBar";

import { useState, useEffect } from "react";

export default function GetStadiumApi() {
  const [stadiums, setStadiums] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getStadiumList = async () => {
    const res = await fetch(
      "/api/frappe/stadium_booking.api.stadium.get_stadium_list",
      {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      }
    );

    const data = await res.json();
    console.log("API DATA:", data);

    return data?.message?.data || [];
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await getStadiumList();
        setStadiums(result);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center text-2xl text-gray-500 animate-pulse">
        Loading...
      </div>
    );
  }


  // getStadiumDetails

  async function GetStadiumDetails(){
    const res = await fetch("/api/frappe/stadium_booking.api.stadium.get_stadium_detail?slug=gfsz",
      {
        method : "GET",
        credentials: "include",
        headers:{
          accept: "application/json"
        }
      }
    );
    const data= await res.json();
    console.log("response stadium API detail", data);
  };


// post function
const signupRequest = async ()=>{
  const res = await fetch("/api/frappe/stadium_booking.api.auth.signup_init", {
  method: "POST",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    full_name: "jamil",
    email: "jamil@gmail.com",
    mobile_no: "01618914834",
    password: "123456",
  }),
});
  const data = await res.json()
  console.log("signup response", data)
}




// signupUserOTP
const sendSignupOTP = async ()=>{
  const res = await fetch("/api/frappe/stadium_booking.api.auth.signup_verify_otp",
    {
      method:"POST",
      credentials: "include",
      headers: {
        "content-type":"application/json",
        accept: "application/json",
      },
      body: JSON.stringify({

        identifier: "01618914834",
        otp: "530126",

        // required for backend final customer/user creation
        full_name: "jamil",
        email: "jamil@gmail.com",
        mobile_no: "01618914834",
        password: "123456",
        address: "jatrabari",
        city: "dhaka"

      })
    }
  );
  const data = await res.json();
  console.log("send OTP respons", data)
};


  return (
    <main>
      
      <LogoContact/>
      <NavBar/>
      <div className="w-[85%] mx-auto">
        <h1 className="text-2xl font-bold mb-4">Stadium list</h1>

        {stadiums.map((item) => (
          <div key={item.name} className="flex flex-col gap-3  border p-3 rounded mb-2">
            <h2>Stadium Name: {item.stadium_name}</h2>
            <h2>City: {item.city}</h2>
            <h2>Closing time: {item.closing_time}</h2>
            <h2>Name: {item.name}</h2>
            <h2>Short Description: {item.short_description}</h2>
          </div>
        ))}
        <button onClick={signupRequest}>Sign Up Request</button> <br />
        <button onClick={sendSignupOTP}>Send Sign Up OTP</button> <br />
        <button onClick={GetStadiumDetails}>Get Stadium Details</button>
      </div>
      
    </main>
  );
}