import React from "react";
import {
    FaApple, FaSearch, FaShoppingBag, FaBars
} from "react-icons/fa";


const Navbar = () => {
    return (
        <>
        <nav className=" flex bg-black/95  text-gray-300 gap-10 p-4 justify-center sticky top-0 z-10  backdrop-blur-md shadow-sm ">
            <ul className=" items-center space-x-10   text-gray-300 text-xs  hidden md:flex">
                <p className="text-xl"><FaApple /></p>
                <li><a href="#">Store</a></li>
                <li><a href="">Mac</a></li>
                <li><a href="">iPad</a></li>
                <li><a href="">iPhone</a></li>
                <li><a href="">Watch</a></li>
                <li><a href="">AirPods</a></li>
                <li><a href="">TV & Home</a></li>
                <li><a href="">Entertainment</a></li>
                <li><a href="">Accessories</a></li>
                <li><a href="">Support</a></li>
                <p className="text-base"><FaSearch /></p>
                <p className="text-base"><FaShoppingBag /></p>

            </ul>
            <div className=" flex md:hidden w-full justify-between items-center">
                <div> <p className="text-xl"><FaApple /></p></div>
                <div className="flex space-x-8">
                    <p><FaSearch /></p>
                    <p><FaShoppingBag /></p>
                    <p><FaBars /></p>
                </div>
            </div>
          </nav>



          
          
          </>
          
    )
}
export default Navbar;