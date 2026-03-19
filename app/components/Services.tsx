import { PiHeartbeatBold } from "react-icons/pi";



export default function(){
    return(
        <div className=" grid grid-cols-4  bg- w-85/100 h-200 mx-auto my-50  [&>div]:h-94 [&>div]: ">
            <div className=" m-3 pt-3 col-span-2 border-t border-gray-300 bg-">
                <p className="text-gray-400 m-0">Services</p>
                <br />
                <h1 className="text-[40px] font-bold">What we do</h1>
                <br />
                <p className="p-0">Our state-of-the-art facility is equipped with the latest medical technology, and our team of experienced professionals is committed to delivering personalized, compassionate care.</p>
            </div>
            <div className=" m-3 p-9 bg-gray-200/80 flex flex-col justify-between rounded-md hover:bg-[#31b3a4] duration-300 hover:**:text-white">
                <PiHeartbeatBold className="text-5xl text-[#0090ca]" />
                <div>
                    <h1 className="font-bold text-2xl mb-3">Critical Care</h1>
                    
                    <p>Tailored healthcare solutions for businesses.</p>
                </div>
            </div>
            <div className=" m-3 bg-[#0090ca] rounded-md hover:bg-[#31b3a4] duration-300 hover:**:text-white"><p></p></div>
            <div className=" m-3 bg-gray-200/80 rounded-md hover:bg-[#31b3a4] duration-300 hover:**:text-white"><p></p></div>
            <div className=" m-3 bg-[#023059] rounded-md hover:bg-[#31b3a4] duration-300 hover:**:text-white"><p></p></div>
            <div className=" m-3 col-span-2 bg-cover bg-center rounded-md hover:**:text-white" style={{backgroundImage: "url('/AllServices.webp')"}}><p></p></div>

        </div>
    )
}