import LogoContact from "./components/LogoContact";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Departments from "./components/Departments";
import Doctors from "./components/Doctors";

export default function Page(){
  return(
    <div>
      <LogoContact/>
      <NavBar/>
      <HeroSection/>
      <Services/>
      <Departments/>
      <Doctors/>
    </div>
  )
}