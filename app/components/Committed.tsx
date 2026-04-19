import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";


export default function Committed(){






    return(
        <div className="w-full h-231 bg-cover bg-center" style={{backgroundImage: "url('/codioful-formerly-gradienta-OzfD79w8ptA-unsplash.jpg')"}}>
            <div className="flex items-center h-115 w-full">
                <h2 className=" text-6xl text-white font-bold ml-40">Committed to excellence, driven by <br /> compassion</h2>
            </div>

            <div className="flex justify-between">
                <div className="h-115 w-29/100">
                </div>
                <div className="h-115 w-35/100 text-xl text-white font-bold">Unico Hospital was founded with a single, <br /> unwavering mission: to provide exceptional <br /> healthcare that puts the patient at the heart <br /> of everything we do.
                </div>

                <div className="h-115 w-35/100 pt-4">

                    <h1 className="inline-block text-9xl text-white font-bold">250</h1>
                    <p className="inline-block text-2xl text-white font-bold ml-4">Beds</p>
                    <p className="text-[15px] text-white mb-8">At Unico, we believe that healthcare is more than just treating <br /> symptoms—it’s about understanding the unique needs of each patient <br /> and their journey to wellness. Our team of highly skilled professionals <br /> is dedicated to delivering personalized care in a warm, welcoming <br /> environment.</p>

                    <Link href="/doctors" className="flex text-[15px] px-7 py-2 w-40 text-white font-bold bg-[#0090ca] rounded-3xl hover:bg-white hover:text-blue-950 transition ">Learn More<IoMdArrowForward className="  mt-1 ml-2" /></Link>
                </div>
            </div>

        </div>
    )
}