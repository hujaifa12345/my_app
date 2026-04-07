import Link from "next/link"




export default function NavBar(){
    return(
        <div className="">
            <ul className="flex items-center w-85/100 h-[65px] mx-auto justify-between border-t-[1px] border-gray-300 [&>li]: text-gray-800 [&>li]:font-bold [&>li]:px-[0px] [&>li]:pt-5 [&>li]:h-[67px] [&>li]: text-[15px] [&>li]:hover:text-[#0090ca] [&>li]:hover:border-t [&>li]:hover:border-t-2 [&>li]:transition [&>li]:duration-">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/doctors">Doctors</Link></li>
                <li>Department</li>
                <li>Services</li>
                <li><Link href="/packages">Packages</Link></li>
                <li><Link href="/newsAndEvents">News & Events</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li>About</li>
            </ul>
        </div>
    )
}