import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";



export default function CheckPackages(){





    return(
        <div className="h-150 w-full bg-cover bg-center flex items-center" style={{backgroundImage: "url('/HealthPackageBG.webp')"}}>
            <div className="ml-40">
                <p className="text-[42px] text-white font-bold mb-14">Choose the right health package for you,<br />
                   book your personalized care today!
                </p>

                <Link href="/packages" className="flex text-[15px] px-7 py-2 w-50 bg-[#0090ca] text-white font-bold rounded-3xl hover:bg-[#31b3a4] transition ">Check Packages<IoMdArrowForward className="  mt-1 ml-2" /></Link>
            </div>
        </div>
    )
}