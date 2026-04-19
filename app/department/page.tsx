
import LogoContact from "../components/LogoContact"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Link from "next/link"




export default function(){



    return(
        <main>
            <LogoContact/>
            <NavBar/>

            <div className=" flex flex-col justify-between px-40 py-10 text-white w-full h-97.5 bg-no-repeat bg-cover bg-center" 
                style={{backgroundImage: "url('/Departments-Banner.jpeg')"}}>
                <div className="text-white text-medium flex items-center gap-2">
                    <Link href="/" className="text-gray-400">Home</Link>
                    <span className="font-bold">•</span>
                    <span className=" font-medium">Departments</span>
                </div>

                <div>
                    <h1 className="text-5xl font-bold">Departments</h1>

                    <br />

                    <p>Discover our specialized departments, each committed to providing <br /> expert care tailored to your unique health needs.
                    </p>
                </div>
            </div>


            <Footer/>
        </main>
    )
}