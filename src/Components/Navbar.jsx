import React from 'react'
import '../App.css'
import logo from '../assets/Images/jec logo QQ.webp';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div class="h-[80px] flex items-center max-md:h-[70px]">
                <img class="pl-6 mr-3 h-14 w-auto max-md:h-11" src={logo} alt="" />
                    <div class="collegeName">
                        <p class="text-2xl font-semibold max-md:text-xl max-md:mb-[-8px]">Robotics Laboratory</p>
                        <a class="no-underline text-black text-sm max-md:text-xs" target="_blank" href="https://www.jecjabalpur.ac.in/">Jabalpur
                            Engineering College</a>
                    </div>
            </div>

            <nav class="nav w-full h-14 bg-[#1e2a78]">
                <ul class="flex justify-around h-full items-center max-w-[90%] m-auto">
                    <li><Link className="text-white text-base active:transition-transform active:duration-80 active:ease-in-out active:scale-107 hover:transition-transform hover:duration-80 hover:ease-in-out hover:scale-107" to="/">Home</Link></li>
                    <li><Link className="text-white text-base active:transition-transform active:duration-80 active:ease-in-out active:scale-107 hover:transition-transform hover:duration-80 hover:ease-in-out hover:scale-107" to="/updates">Updates</Link></li>
                    <li><Link className="text-white text-base active:transition-transform active:duration-80 active:ease-in-out active:scale-107 hover:transition-transform hover:duration-80 hover:ease-in-out hover:scale-107" to="/projects">Projects</Link></li>
                    <li><Link className="text-white text-base active:transition-transform active:duration-80 active:ease-in-out active:scale-107 hover:transition-transform hover:duration-80 hover:ease-in-out hover:scale-107" to="/equipments">Equipments</Link></li>
                    <li><Link className="text-white text-base active:transition-transform active:duration-80 active:ease-in-out active:scale-107 hover:transition-transform hover:duration-80 hover:ease-in-out hover:scale-107 max-sm:hidden" to="https://www.jecjabalpur.ac.in/">Institute</Link></li>
                    <li><Link className="text-white text-base active:transition-transform active:duration-80 active:ease-in-out active:scale-107 hover:transition-transform hover:duration-80 hover:ease-in-out hover:scale-107 max-sm:hidden" to="/contact_us">Contact Us</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar