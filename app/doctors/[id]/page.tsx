import LogoContact from "@/app/components/LogoContact"
import NavBar from "@/app/components/NavBar"
import Footer from "@/app/components/Footer"
import Link from "next/link"
import { IoCalendarNumberSharp } from "react-icons/io5";







export default async function DoctorDetails(
  //{ params }: { params: Promise<{ id: string }> }
  { params }: { params:{ id: string } }
) {

    //const { id } = await params   // 👈 THIS IS THE FIX

    const res = await fetch("http://localhost:3000/data/doctors.json", {
        cache: "no-store"
    })

    const doctors = await res.json()

    // const doctor = doctors.find((d: any) => String(d.id) === String(id))
    const doctor = doctors.find((d: any) => String(d.id) === String(params.id))

    if (!doctor) {
        return <h1>Doctor Not Found</h1>
    }

    return (
        <main>
            <LogoContact/>
            <NavBar/>

            <div className=" flex flex-col justify-between px-40 py-10 text-white w-full h-97.5 bg-no-repeat bg-cover bg-center" 
                style={{backgroundImage: "url('/doctor-details-banner.jpeg')"}}>
                <div className="text-white text-medium flex items-center gap-2">
                    <Link href="/" className="text-gray-400">Home</Link>
                    <span className="font-bold">•</span>
                    <Link href="/department" className="text-gray-400">Department</Link>
                    <span className="font-bold">•</span>
                    <span className=" font-medium">{doctor.name}</span>
                </div>

                <div>
                    <h1 className="text-[30px] font-bold">{doctor.name}</h1>

                    <br />

                    <p>{doctor.designation}</p>
                    <p>{doctor.department}</p>
                </div>
            </div>
            
            <div className="flex gap-8 w-[85%] mx-auto mt-15 mb-40">

                <div className="w-[32%]">
                    <div className="flex items-center justify-center w-full h-190 bg-[#023059]">
                        <img src={doctor.image} alt={doctor.name} className="h-110 w-110 -mt-35 rounded-full"/>
                    </div>
                    <button className="flex gap-3 items-center justify-center h-10 px-8 mt-8 text-gray-100 bg-[#0090ca] hover:bg-[#31b3a4] rounded-full">
                        <span>Book an Appointment</span>
                        <IoCalendarNumberSharp />
                    </button>
                </div>
                
                <div className="w-[68%] text-gray-700">
                    <h1 className="text-[18px] font-bold">{doctor.name}</h1>
                    <br />
                    <p>{doctor.designation}</p> <p>{doctor.department}</p>
                    <br />
                    <hr />
                </div>
                
            </div>

            <Footer/>
        </main>
    )
}