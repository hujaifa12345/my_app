import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";
import LogoContact from "./components/LogoContact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


export default function NotFound(){



    return(
        <div>
            <LogoContact/>
            <NavBar/>
            <div className="w-full h-189 text-white bg-cover bg-center bg-no-repeat flex flex-col justify-center relative" style={{backgroundImage: "url('/not-found-bg.jpg')"}}>
                <div className="absolute inset-0 bg-[#023059]/50 z-0"></div>
                    <div className="flex flex-col gap-8 items-center justify-center -mt-40 z-10">
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <h2 className="text-7xl font-bold">Oops!</h2>
                                <h2 className="text-7xl font-bold">Page Not Found.</h2>
                            </div>
                        <div >
                            <p>It looks like the page you’re searching for doesn’t exist. Don’t worry, we’re here to help you find what you need. Try returning to the homepage or</p>
                            <p>use the navigation menu to explore other sections of our site. If you need further assistance, feel free to contact us.</p>
                        </div>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-2 bg-[#0090ca] text-white font-semibold rounded-full hover:bg-[#31b3a4] transition duration-300"
                            >
                            <span>Return Home</span>
                            <FaArrowRightLong />
                        </Link>
                    </div>
            </div>
            <Footer/>
        </div> 

    )
}