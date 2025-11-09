import React from "react";
import { FaApple } from "react-icons/fa"
import SectionOne from "../assets/SectionOne.jpg";
import SectionTwo from "../assets/SectionTwo.jpg";
import SectionThree from "../assets/SectionThree.jpg";
import SectionFour from "../assets/SectionFour.jpg";
import SectionFive from "../assets/SectionFive.jpg";
import SectionSix from "../assets/SectionSix.jpg"

const Section = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 ">


                <div className="relative flex justify-center text-center flex-col items-center ">
                    <img src={SectionOne} alt="" className="w-full h-[57vh] object-cover md:h-[97vh] md:object-cover"></img>
                    <div className="absolute top-4 items-center mt-0 md:mt-10 space-y-0  md:space-y-1">
                        <h2 className="items-center text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold">Using them together</h2>
                        <h2 className="items-center text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold">sets them apart.</h2>
                        <p className="text-lg sm:text-2xl md:text-2xl lg:text-2xl ">Apple devices work together so</p>
                        <p className="text-lg sm:text-2xl md:text-2xl lg:text-2xl ">seamlessly,it almost feels like magic.</p>
                        <div className="space-x-4 items-center space-y-2 " >
                            <button className="border border-blue-600 bg-blue-600 mt-2 rounded-full px-6 py-2 font-medium text-sm sm:text-base text-white">Learn more</button>

                        </div>
                    </div>


                </div>

                <div className="relative flex justify-center text-center flex-col items-center ">
                    <img src={SectionTwo} alt="" className="w-full object-contain"></img>
                    <div className="absolute top-4 items-center -mt-2 md:mt-10 space-y-0  md:space-y-1 ">
                        <h2 className="items-center text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-white">iPad Pro</h2>
                        <p className="text-base sm:text-2xl md:text-2xl lg:text-2xl text-white ">Advanced Ai performance</p>
                        <p className="text-base sm:text-2xl md:text-2xl lg:text-2xl text-white "> and game-changing capabilities.</p>
                        <div className="space-x-4 items-center space-y-2" >
                            <button className="border border-blue-600 bg-blue-600  rounded-full px-6 py-2 font-medium text-xs md:text-base text-white">Learn more</button>
                            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full  px-6 py-2 font-medium text-xs md:text-base">Buy</button>
                        </div>
                    </div>


                </div>

                <div className="relative flex justify-center text-center flex-col items-center ">
                    <img src={SectionThree} alt="" className="w-full object-contain"></img>
                    <div className="absolute top-4 items-center mt-0 md:mt-10 space-y-0  md:space-y-1">
                        <h2 className="items-center text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">AirPods Pro 3</h2>
                        <p className="text-lg sm:text-2xl md:text-2xl lg:text-2xl ">the world's best in-ear</p>
                        <p className="text-lg sm:text-2xl md:text-2xl lg:text-2xl ">Active Noise Cancellation.¹</p>
                        <div className="space-x-4 items-center space-y-2" >
                            <button className="border border-blue-600 bg-blue-600  rounded-full px-6 py-2 font-medium text-sm sm:text-base text-white">Learn more</button>
                            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-6 py-2 font-medium text-sm sm:text-base">Buy</button>
                        </div>
                    </div>


                </div>

                <div className="relative flex justify-center text-center flex-col items-center ">
                    <img src={SectionFour} alt="" className="w-full object-contain"></img>
                    <div className="absolute top-4 items-center mt-0 md:mt-10 space-y-0  md:space-y-1">
                        <h2 className="text-2xl flex gap-2 items-center text-center px-14 md:px-10 md:text-4xl"><bold className="font-bold text-2xl flex items-center text-center md:text-4xl"><FaApple />WATCH</bold> SERIES 11</h2>
                        <p className="text-lg sm:text-2xl md:text-2xl lg:text-2xl ">The ultimate Watch for a healthy life.</p>
                        <div className="space-x-4 items-center space-y-2" >
                            <button className="border border-blue-600 bg-blue-600  rounded-full px-6 py-2 font-medium text-sm sm:text-base text-white">Learn more</button>
                            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-6 py-2 font-medium text-sm sm:text-base">Buy</button>
                        </div>
                    </div>


                </div>

                <div className="relative flex justify-center text-center flex-col items-center ">
                    <img src={SectionFive} alt="" className="w-full object-contain"></img>
                    <div className="absolute top-4 items-center mt-0 md:mt-10 space-y-0  md:space-y-1">
                        <h2 className="items-center text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">MacBook Air</h2>
                        <p className="text-lg sm:text-2xl md:text-2xl lg:text-2xl ">Sky blue colour.</p>
                        <p className="text-lg sm:text-2xl md:text-2xl lg:text-2xl ">Sky high performance with M4.</p>
                        <div className="space-x-4 items-center space-y-2" >
                            <button className="border border-blue-600 bg-blue-600  rounded-full px-6 py-2 font-medium text-sm sm:text-base text-white">Learn more</button>
                            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-6 py-2 font-medium text-sm sm:text-base">Buy</button>
                        </div>
                    </div>


                </div>

                <div className="relative flex justify-center text-center flex-col items-center ">
                    <img src={SectionSix} alt="" className="w-full object-contain"></img>
                    <div className="absolute top-4 items-center mt-0 md:mt-10 space-y-0  md:space-y-1">
              <h2 className="text-2xl flex gap-2 items-center text-center md:text-4xl px-5 md:px-0"><bold className="font-bold text-2xl flex items-center text-center md:text-4xl">
                <FaApple />Trade in</bold></h2>
                        <p className="text-lg sm:text-2xl md:text-2xl lg:text-2xl items-center ">Upgrade and save.</p>
                        <p className="text-lg sm:text-2xl md:text-2xl lg:text-2xl items-center">it's that easy</p>
                        <div className="space-x-4 items-center space-y-4" >
                            <button className="border border-blue-600 bg-blue-600  rounded-full px-6 py-2 font-medium text-sm sm:text-base text-white">Get your estimate</button>

                        </div>
                    </div>


                </div>



            </div>






        </>
    )
}
export default Section;