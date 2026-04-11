"use client";

import { PathnameContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import Link from "next/link";
import { usePathname } from "next/navigation";




export default function NavBar(){

    const pathname = usePathname()


    return(
        <div className="">
            <ul className="flex items-center w-85/100 h-[65px] mx-auto justify-between border-t-[1px] border-gray-300 [&>li]:text-gray-800 [&>li]:font-bold [&>li]:px-0 [&>li]:pt-5 [&>li]:h-[67px] [&>li]: text-[15px] [&>li]:hover:border-t [&>li]:hover:scale-102 [&>li]:transition [&>li]:duration-">
                <li>
                    <Link 
                    href="/" 
                    className={pathname === "/" ? "text-[#0090ca] text-[16px]" : "text-gray-800"}
                    >Home
                    </Link>
                </li>

                <li>
                    <Link href="/doctors"
                    className={pathname === "/doctors" ? "text-[#0090ca] text-[16px]" : "text-gray-800"}
                    >Doctors 
                    </Link>
                </li>

                <li>Department</li>

                <li>Services</li>

                <li>
                    <Link href="/packages"
                    className={pathname === "/packages" ? "text-[#0090ca] text-[16px]" : "text-gray-800"}
                    >Packages 
                    </Link>
                </li>

                <li>
                    <Link href="/newsAndEvents"
                    className={pathname === "/newsAndEvents" ? "text-[#0090ca] text-[16px]" : "text-gray-800"}
                    >News & Events
                    </Link>
                </li>

                <li>
                    <Link href="/gallery"
                    className={pathname === "/gallery" ? "text-[#0090ca] text-[16px]" : "text-gray-800"}
                    >Gallery 
                    </Link>
                </li>

                <li>
                    <Link href="/contact"
                    className={pathname === "/contact" ? "text-[#0090ca] text-[16px]" : "text-gray-800"}
                    >Contact 
                    </Link>
                </li>
                <li>About</li>
            </ul>
        </div>
    )
}