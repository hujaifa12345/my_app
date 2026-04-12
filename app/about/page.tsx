import LogoContact from "../components/LogoContact";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";




export default function AboutUnicoHospital(){


    return(
        <main>
            <LogoContact/>
            <NavBar/>
            <div className="w-full h-500 bg-[#0090ca]">
                <div className="w-[85%] mx-auto">
                    <h1 className="text-7xl text-white font-bold py-30 ">
                        Committed to excellence, driven <br /> by compassion
                    </h1>
                </div>

                <div className="flex">
                    <ul>
                        <h2>About Us:</h2>
                        <li><span className="font-bold">•</span></li>
                        <li><span className="font-bold">•</span></li>
                        <li><span className="font-bold">•</span></li>
                        <li><span className="font-bold">•</span></li>
                        <li><span className="font-bold">•</span></li>
                        <li><span className="font-bold">•</span></li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </main>
    )


  
}