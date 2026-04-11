import LogoContact from "../components/LogoContact"
import NavBar from "../components/NavBar"



export default function Contact(){


    return(
        <div>
            <LogoContact/>
            <NavBar/>
            <div className="flex h-screen items-center">
                <h1 className="mx-auto text-9xl text-[#023059] font-bold">Contact</h1>
            </div>
        </div>
    )
}