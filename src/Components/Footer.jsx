import React from 'react'
import Logo from '../assets/Images/jec logo QQ.webp';
import sm_img1 from '../assets/Images/1.png';
import sm_img2 from '../assets/Images/2.png';
import sm_img3 from '../assets/Images/3.png';
import sm_img4 from '../assets/Images/4.png';

const Footer = () => {
    return (
        <footer class="bg-black py-[5vh]">
            <div class="upperf h-[75%] w-[80%] m-auto flex justify-between items-center max-lg:flex-col max-lg:gap-[5vh]">
                <div class="collegeDetails lg:w-[40%] max-lg:w-[80vw]">
                    <div class="footercollege h-auto flex items-center">
                        <img class="h-[42px] pr-2" src={Logo} alt="" />
                        <div class="footercollegeName text-[15px]">
                            <p class="font-semibold text-white text-[16px] mb-[-5px]" href="">Robotics Laboratory</p>
                            <a class=" text-[10px] text-white no-underline">Jabalpur Engineering College </a>
                        </div>
                    </div>

                    <p class="mt-4 font-light text-[12px] text-white">Jabalpur Engineering College has successfully
                        established an IoT & Robotics Lab in collaboration with
                        the e-Yantra Lab Setup Initiative (eLSI) by IIT Bombay!
                    </p>

                    <div class="icons mt-3 flex gap-3">
                        <img class="h-[32px] transition-transform ease-in-out duration-10 hover:scale-115 active:scale-115"
                            src={sm_img1} alt="" />
                        <img class="h-[32px] transition-transform ease-in-out duration-10 hover:scale-115 active:scale-115"
                            src={sm_img2} alt="" />
                        <img class="h-[32px] transition-transform ease-in-out duration-10 hover:scale-115 active:scale-115"
                            src={sm_img3} alt="" />
                        <img class="h-[32px] transition-transform ease-in-out duration-10 hover:scale-115 active:scale-115"
                            src={sm_img4} alt="" />
                    </div>


                </div>
                <div class="footerTXT flex max-lg:gap-[8vw] lg:gap-12 w-auto">
                    <div class="column flex flex-col gap-5">
                        <a class="no-underline text-[#ffffff69] text-sm transition-transform ease-in-out duration- hover:scale-109 hover:text-[#ffffff8e] active:scale-107 active:text-[#ffffff8e]"
                            href="">Home</a>
                        <a class="no-underline text-[#ffffff69] text-sm transition-transform ease-in-out duration-80 hover:scale-109 hover:text-[#ffffff8e] active:scale-107 active:text-[#ffffff8e]"
                            href="">JEC Jabalpur</a>
                    </div>
                    <div class="column flex flex-col gap-5">
                        <a class="no-underline text-[#ffffff69] text-sm transition-transform ease-in-out duration-80 hover:scale-109 hover:text-[#ffffff8e] active:scale-107 active:text-[#ffffff8e]"
                            href="">Projects</a>
                        <a class="no-underline text-[#ffffff69] text-sm transition-transform ease-in-out duration-80 hover:scale-109 hover:text-[#ffffff8e] active:scale-107 active:text-[#ffffff8e]"
                            href="">Updates</a>
                        <a class="no-underline text-[#ffffff69] text-sm transition-transform ease-in-out duration-80 hover:scale-109 hover:text-[#ffffff8e] active:scale-107 active:text-[#ffffff8e]"
                            href="">Lab Equipments</a>
                    </div>
                    <div class="column flex flex-col gap-5">
                        <a class="no-underline text-[#ffffff69] text-sm transition-transform ease-in-out duration-80 hover:scale-109 hover:text-[#ffffff8e] active:scale-107 active:text-[#ffffff8e]"
                            href="">Contact Us</a>
                        <a class="no-underline text-[#ffffff69] text-sm transition-transform ease-in-out duration-80 hover:scale-109 hover:text-[#ffffff8e] active:scale-107 active:text-[#ffffff8e]"
                            href="">Team Members</a>
                        <a class="no-underline text-[#ffffff69] text-sm transition-transform ease-in-out duration-80 hover:scale-109 hover:text-[#ffffff8e] active:scale-107 active:text-[#ffffff8e]"
                            href="">Verify Certificates</a>
                    </div>
                </div>
            </div>
            <div class="lowerf h-[25%] flex flex-col items-center ">
                <div class="line h-[1px] w-[85%] mt-[35px] bg-[#99999932]">
                </div>
                <a class="no-underline text-white text-[13px] mt-[30px] opacity-[0.45]" href="">@2025 All rights
                    reserved.</a>
            </div>
        </footer>

    )
}

export default Footer;