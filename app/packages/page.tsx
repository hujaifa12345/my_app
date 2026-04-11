import Link from "next/link"
import LogoContact from "../components/LogoContact"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"





export default function Packages(){


    return(
        <div>
            <LogoContact/>
            <NavBar/>
            <div className=" flex flex-col justify-between px-40 py-10 text-white w-full h-97.5 bg-no-repeat bg-cover bg-center" 
                style={{backgroundImage: "url('/Doctors-banner.jpeg')"}}>
                <div className="text-white text-medium flex items-center gap-2">
                    <Link href="/" className="text-gray-400">Home</Link>
                    <span className="font-bold">•</span>
                    <span className=" font-medium">Packages</span>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Packages</h1>
                    <br />
                    <p>Explore our tailored health packages, designed to meet your <br /> unique needs and provide comprehensive care.</p>
                </div>
            </div> 

            <div className="w-[85%] mx-auto my-26 [&>p]:text-[15px] [&>p]:text-gray-600">
                <p>
                    As the adage goes – Prevention is better than cure. At Unico Hospital, we too believe strongly in the Preventive medicine realm of healthcare. Preventive medicine is the practice of promoting preventive healthcare to improve a person’s well-being. As a healthcare provider, we understand that it is also our responsibility to raise the bar of health awareness in our community.
                </p>
                
                <br />

                <p>
                    As part of improving one’s wellbeing, we at Unico Hospital, encourage you to take a step towards screening the quality of your health. This will help, both you and your doctor, to detect any early signs of lifestyle diseases and non-communicable diseases.
                </p>

                <br />

                <p>
                    At Unico Hospital, we have a team of expert professionals under the department of Family Medicine, who focus exclusively on early detection of such conditions. Our health screening packages, as the name indicates, help to assess the quality of your health and highlights the specific areas that need your special attention. Health screening packages for all gender and age groups are readily available. However, we recommend that you meet with our family medicine doctor to highlight any health concerns prior to initiating the health check so that a personalized health package can be tailored to address your specific health concerns.
                </p>

                <br />

                <p>
                    The Unico Health Screening packages are designed to make health screening a simple and routine part of your annual health calendar.
                </p>

                <br />
                <br />

                <h2 className="text-gray-600 font-bold">
                    Instruction for Health Screening packages:
                </h2>

                <br />

                <p>
                    <span className="font-bold text-[#0090ca]">•</span> Report to hospital registration desk between 8.00-9.00 am with your previous medical documents, if any.
                </p>

                <br />

                <p>
                    <span className="font-bold text-[#0090ca]">•</span> For fasting sample, report with complete fasting of average 12 hours (not less than 8 hours and not more than 16 hours prior to the test). May drink plain water.
                </p>

                <br />

                <p>
                    <span className="font-bold text-[#0090ca]">•</span> Do not take any medication, alcohol or cigarettes in the morning. If you are on regular medication, bring it with you and take it after giving fasting sample.
                </p>

                <br />

                <p>
                    <span className="font-bold text-[#0090ca]">•</span> Wear loose and comfortable clothes as you may have to change dress for some investigations.
                </p>

                <br />

                <p>
                    <span className="font-bold text-[#0090ca]">•</span> Kindly avoid metallic ornaments/ heavy jewelry.
                </p>

                <br />

                <p>
                    <span className="font-bold text-[#0090ca]">•</span> For Ultrasonogram of whole abdomen, patient needs to be on minimum 6 hours fasting state. Only drink enough water to fill your bladder & have urine urge and pressure. Refrain from passing urine prior to
                </p>

                <br />

                <p>
                    <span className="font-bold text-[#0090ca]">•</span> Pregnant woman or those suspecting pregnancy are advised to inform the health check consultant before undergoing X-ray/ Mammogram.
                </p>

                <br />

                <p>
                    <span className="font-bold text-[#0090ca]">•</span> Consider half a day to complete the health screening program.
                </p>

                <br />

                <h2 className="text-gray-600 font-bold">
                    For book your appointment, call us +88 01841996600
                </h2>

            </div>

            <div className="w-[85%] mx-auto my-50">
                <div className="w-full ">
                
                    <div className="flex items-center justify-between h-35 border-b border-b-gray-200 pb-4">
                        
                        {/* Left side */}
                        <div className="flex items-center gap-4">
                        
                        {/* Number circle */}
                        <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#0090ca]  text-white text-[11px]">
                            1
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-semibold text-gray-700">
                            Cancer Screening Package-Male
                        </h2>
                        
                        </div>

                        {/* Right side button */}
                        <Link href="/404"  className="flex items-center gap-2 bg-[#0090ca] text-white font-bold px-5 py-2 rounded-full hover:bg-[#31b3a4] transition">
                        Check Details →
                        </Link>

                    </div>

                    <div className="flex items-center justify-between h-35 border-b border-b-gray-200 pb-4">
                        
                        {/* Left side */}
                        <div className="flex items-center gap-4">
                        
                        {/* Number circle */}
                        <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#0090ca]  text-white text-[11px]">
                            2
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-semibold text-gray-700">
                            Cancer Screening Package-Male
                        </h2>
                        
                        </div>

                        {/* Right side button */}
                        <Link href="/404" className="flex items-center gap-2 bg-[#0090ca] text-white font-bold px-5 py-2 rounded-full hover:bg-[#31b3a4] transition">
                        Check Details →
                        </Link>

                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}