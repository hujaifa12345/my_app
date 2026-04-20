



export default function LogInPage(){




    return(
        <main className="flex items-center justify-center h-screen w-full bg-cover bg-center relative " style={{backgroundImage: "url('/login_bg.jpg')"}}>
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="flex flex-col gap-5 items-center  h-92 w-105 px-4 py-9 bg-white relative">
                <img src="/log-in-logo.png" alt="logo" className="w-52"/>
                <h2 className="flex items-center justify-center h-9 w-full text-[14px] bg-gray-300"><span>Sign in</span></h2>
                <input type="text" placeholder="Enter Your UHID" className="w-full h-9 outline-[#007C80] border-[1px] outline-[#007C80] border-[#007C80]" />
                <input type="text" placeholder="Enter Your Registered Mobile No" className="w-full h-9 outline-[#007C80] border-[1px] outline-[#007C80] border-[#007C80]" />
                <button className="text-white w-full h-9 bg-[#007C80] border border-[#007C80] hover:bg-white hover:text-[#007C80] rounded transition duration-200">Sign in</button>
            </div>
        </main>
    )
}