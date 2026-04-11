import Link from "next/link";
import Footer from "../components/Footer";
import LogoContact from "../components/LogoContact";
import NavBar from "../components/NavBar";



export default function Gallery(){




    return(
        <div>
            <LogoContact/>
            <NavBar/>

            <div className=" flex flex-col justify-between px-40 py-10 text-white w-full h-97.5 bg-no-repeat bg-cover bg-center" 
                style={{backgroundImage: "url('/Gallery-Banner.jpeg')"}}>
                <div className="text-white text-medium flex items-center gap-2">
                    <Link href="/" className="text-gray-400">Home</Link>
                    <span className="font-bold">•</span>
                    <span className=" font-medium">Gallery</span>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Gallery</h1>
                    <br />
                    <p>Stay informed with the latest news, important updates, and <br /> upcoming events happening at Unico Hospital.</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-7 w-[85%] mx-auto my-50 ">

                <div className="w-130  overflow-hidden">

                    <img 
                    src="/Gallery-Image.png" 
                    alt="Gallery-Image" 
                    className="w-full rounded-md hover:scale-110 transition duration-1000"
                    />

                    <h2 className="my-3 text-[24px] text-gray-700">
                        World Heart Day 2025 Celebration at Unico Hospital
                    </h2>

                </div>

                <div className="w-130  overflow-hidden">

                    <img 
                    src="/Gallery-Image.png" 
                    alt="Gallery-Image" 
                    className="w-full rounded-md hover:scale-110 transition duration-1000"
                    />

                    <h2 className="my-3 text-[24px] text-gray-700">
                        World Heart Day 2025 Celebration at Unico Hospital
                    </h2>

                </div>

                <div className="w-130  overflow-hidden">

                    <img 
                    src="/Gallery-Image.png" 
                    alt="Gallery-Image" 
                    className="w-full rounded-md hover:scale-110 transition duration-1000"
                    />

                    <h2 className="my-3 text-[24px] text-gray-700">
                        World Heart Day 2025 Celebration at Unico Hospital
                    </h2>

                </div>

                <div className="w-130  overflow-hidden">

                    <img 
                    src="/Gallery-Image.png" 
                    alt="Gallery-Image" 
                    className="w-full rounded-md hover:scale-110 transition duration-1000"
                    />

                    <h2 className="my-3 text-[24px] text-gray-700">
                        World Heart Day 2025 Celebration at Unico Hospital
                    </h2>

                </div>

                <div className="w-130  overflow-hidden">

                    <img 
                    src="/Gallery-Image.png" 
                    alt="Gallery-Image" 
                    className="w-full rounded-md hover:scale-110 transition duration-1000"
                    />

                    <h2 className="my-3 text-[24px] text-gray-700">
                        World Heart Day 2025 Celebration at Unico Hospital
                    </h2>

                </div>

            </div>


            <Footer/>
        </div>
    )
}