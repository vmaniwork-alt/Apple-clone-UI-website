import React from "react";
import HeroOne from "../assets/HeroOne.jpg";
import HeroTwo from "../assets/HeroTwo.jpg"
import HeroThree from "../assets/HeroThree.jpg"
import HeroOneMobile from "../assets/HeroOneMobile.jpg"
import HeroTwoMobile from "../assets/HeroTwoMobile.jpg"
 const Hero =()=>{
    return(
        <>
        
            <div className="relative text-white flex justify-center items-center ">
                 <img src={HeroOne} alt="iPhone" className="w-full h-[80vh] object-cover hidden md:block"/>
                 <img src={HeroOneMobile} alt="iphone" className="  w-full h-[75vh] object-cover block md:hidden"></img>
                <div className="absolute top-8 text-center space-y-2">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6 font-semibold">iPhone 17 Pro</h2>
                    <p className="text-lg font-semibold ">All out Pro.</p>
                    <div className="space-x-4 items-center space-y-2" >
                        <button className="border border-blue-600 bg-blue-600  rounded-full px-6 py-2 font-medium text-sm sm:text-base">Learn more</button>
                        <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-6 py-2 font-medium text-sm sm:text-base">Buy</button>
                    </div>
                </div>
                </div>


                
            <div className="relative text-black flex justify-center items-center mt-3 ">
                 <img src={HeroTwo} alt="iPhone" className="w-full h-[80vh] object-cover hidden md:block"  />
                 <img src={HeroTwoMobile} alt="iphone" className="w-full h-[75vh] object-cover block md:hidden"></img>
                <div className="absolute top-8 text-center space-y-0 sm:space-y-0 md:space-y-1">
                    <h2 className="  text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">iPhone Air</h2>
                    <p className="text-lg sm:text-xl md:text-3xl lg:text-3xl font-normal ">The thinest iPhone ever.</p>
                       <p className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-normal ">with the Power of Pro inside .</p>
                    <div className="space-x-4 items-center space-y-2" >
                        <button className="border border-blue-600 bg-blue-600  text-white rounded-full px-4 sm:px-6 py-2 font-medium text-sm sm:text-base">Learn more</button>
                        <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-6 py-2 font-medium text-sm sm:text-base">Buy</button>
                    </div>
                </div>
                </div>

                
            <div className="relative text-white flex justify-center items-center mt-3 ">
                 <img src={HeroThree} alt="iPhone" className="w-full h-[80vh] object-cover" />
                <div className="absolute top-8 text-center space-y-2">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">MacBook Pro 14"</h2>
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold ">Supercharged by M5.</p>
                    <div className="space-x-4 items-center space-y-2" >
                        <button className="border border-blue-600 bg-blue-600  rounded-full px-4 sm:px-6 py-2 font-medium text-sm sm:text-base">Learn more</button>
                        <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-6 sm:px-6 py-2 text-sm sm:text-base font-medium">Buy</button>
                    </div>
                </div>
                </div>
            
        
        
        </>

    )
 };
 export default Hero;