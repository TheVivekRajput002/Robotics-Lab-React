import React from 'react'
import '../App.css'
import logo from '../assets/Images/jec logo QQ.webp';

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
                <div class="flex justify-around h-full items-center max-w-[90%] m-auto">
                    <a class="text-white text-base active:transition-transform active:duration-80 active:ease-in-out active:scale-107 hover:transition-transform hover:duration-80 hover:ease-in-out hover:scale-107"
                        href="">Home</a>
                    <a class="text-white text-base active:transition-transform active:duration-80 active:ease-in-out active:scale-107 hover:transition-transform hover:duration-80 hover:ease-in-out hover:scale-107"
                        href="">Updates</a>
                    <a class="text-white text-base active:transition-transform active:duration-80 active:ease-in-out active:scale-107 hover:transition-transform hover:duration-80 hover:ease-in-out hover:scale-107"
                        href="">Projects</a>
                    <a class="text-white text-base active:transition-transform active:duration-80 active:ease-in-out active:scale-107 hover:transition-transform hover:duration-80 hover:ease-in-out hover:scale-107"
                        href="">Equipments</a>
                    <a class="text-white text-base active:transition-transform active:duration-80 active:ease-in-out active:scale-107 hover:transition-transform hover:duration-80 hover:ease-in-out hover:scale-107 max-sm:hidden"
                        href="">Institute</a>
                    <a class="text-white text-base active:transition-transform active:duration-80 active:ease-in-out active:scale-107 hover:transition-transform hover:duration-80 hover:ease-in-out hover:scale-107 max-sm:hidden"
                        href="">Contact Us</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar