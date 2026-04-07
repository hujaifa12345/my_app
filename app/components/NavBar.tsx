

export default function NavBar(){
    return(
        <div className="">
            <ul className="flex items-center w-85/100 h-[65px] mx-auto justify-between border-t-[1px] border-gray-300 [&>li]: text-gray-800 [&>li]:font-bold [&>li]:px-[0px] [&>li]:pt-5 [&>li]:h-[67px] [&>li]: text-[15px] [&>li]:hover:text-[#0090ca] [&>li]:hover:border-t [&>li]:hover:border-t-2 [&>li]:transition [&>li]:duration-">
                <li> <button>Home</button></li>
                <li>Doctors</li>
                <li>Department</li>
                <li>Services</li>
                <li>Packages</li>
                <li>News & Events</li>
                <li>Gallery</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </div>
    )
}