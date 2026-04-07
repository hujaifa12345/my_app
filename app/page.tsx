import LogoContact from "./components/LogoContact";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Departments from "./components/Departments";
import Doctors from "./components/Doctors";
import CheckPackages from "./components/CheckPackages";
import Committed from "./components/Committed";
import CorporatePartners from "./components/CorporatePartners";
import NewsAndEvents from "./components/NewsAndEvents";
import Footer from "./components/Footer";




export default function Page(){
  return(
    <div className="">
      <LogoContact/>
      <NavBar/>
      <HeroSection/>
      <Services/>
      <Departments/>
      <Doctors/>
      <CheckPackages/>
      <Committed/>
      <CorporatePartners/>
      <NewsAndEvents/>
      <Footer/>
    </div>
  )
}