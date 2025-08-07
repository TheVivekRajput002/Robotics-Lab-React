import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../App.css'
import Home_img from '../assets/Images/homeimg2.webp'
import Lab_video from '../assets/videos/fake_video.mp4'
import Intro_img1 from '../assets/Images/instruments_img.jpg'
import Intro_img2 from '../assets/Images/guidance_image.jpg'
import principle_img from '../assets/Images/principle.png'

const Home = () => {
    return (
        <>
            <Navbar />
            <div
                class="home lg:relative lg:h-[calc(100vh-140px)] max-lg:h-auto max-lg:flex max-lg:flex-col-reverse max-lg:items-center">

                <div
                    class="view lg:absolute lg:top-[17vh] lg:left-[7vw] lg:z-2 lg:w-[37vw] text-white max-lg:w-[80vw] max-lg:mb-[5vh]">
                    <h1 class="text-3xl font-semibold max-lg:text-2xl">IOT & Robotics Lab</h1>
                    <p class="font-light mt-4 max-lg:text-md">At the heart of cutting-edge research and hands-on learning, our Robotics & IoT
                        Lab is a hub for engineering minds to explore, build, and innovate. Join us as we shape the future — one
                        sensor, one bot, one idea at a time.
                    </p>
                    <button id="view" class=" border-none h-[36px] text-[13px] w-[63px] mt-4 hover:scale-105 active:scale-105 transition-transform duration-140 rounded-4xl">View</button>

                </div>
                <div
                    class="mainImage lg:w-[40vw] lg:absolute lg:top-[8vh] lg:right-[5vw] lg:z-2 max-lg:w-[80vw] max-lg:my-[4vh] ">
                    <img src={Home_img} alt="" />
                </div>
            </div>

            {/* <!--=============================== Sec 2: Video  ================--> */}

            <div class="videosec w-full flex flex-col justify-center items-center lg:h-[110vh] max-lg:h-[60vh]">

                <video class="lg:w-[55vw] mb-[5px] rounded-2xl max-lg:w-[85vw]" controls
                    src={Lab_video}></video>
                <div
                    class="trackRecords transition-transform duration-200 hover:scale-101 h-[110px] lg:w-[55vw] max-lg:w-[85vw] bg-white rounded-2xl flex lg:justify-between max-lg:justify-around items-center border-1 border-[#d3d3d3] py-8 lg:px-15 max-lg:px-2">
                    <div class="track flex flex-col justify-content-center items-center">
                        <h2 class="text-[28px] max-lg:text-[24px] font-light">15+</h2>
                        <p class="mt-1 lg:text-xs max-lg:text-[11px] font-normal text-[#919090]">Lab</p>
                        <p class="lg:text-xs max-lg:text-[11px] text-[#919090]">Equipments</p>
                    </div>
                    <div class="track flex flex-col justify-content-center items-center">
                        <h2 class="text-[28px] max-lg:text-[24px] font-light">5+</h2>
                        <p class="mt-1 lg:text-xs max-lg:text-[11px] font-normal text-[#919090]">Lab</p>
                        <p class="lg:text-xs max-lg:text-[11px] text-[#919090]">Projects</p>
                    </div>
                    <div class="track flex flex-col justify-content-center items-center">
                        <h2 class="text-[28px] max-lg:text-[24px] font-light">1+</h2>
                        <p class="mt-1 lg:text-xs max-lg:text-[11px] font-normal text-[#919090]">Events</p>
                        <p class="lg:text-xs max-lg:text-[11px] text-[#919090]">Conducted</p>
                    </div>
                    <div class="track flex flex-col justify-content-center items-center">
                        <h2 class="text-[28px] max-lg:text-[24px] font-light">10+</h2>
                        <p class="mt-1 lg:text-xs max-lg:text-[11px] font-normal text-[#919090]">Number</p>
                        <p class="lg:text-xs max-lg:text-[11px] text-[#919090]">of Members</p>
                    </div>
                </div>
            </div>


            {/* <!--  ==================Sec 3: Introduction =================--> */}

            <div class="introduction py-[10vh] bg-[#bad7f3] flex flex-col lg:gap-[35px] max-lg:gap-[5vh]">


                <div class="paragraph flex justify-center gap-[30px] w-full max-lg:flex-col max-lg:items-center">
                    <img class="lg:w-[32vw] rounded-xl transition-transform duration-200 ease-in-out hover:scale-101 max-lg:w-[80vw]"
                        src={Intro_img1} alt="" />
                    <div class="txt lg:w-[45vw] max-lg:w-[80vw]">
                        <h2 class="mt-[15px] text-2xl font-semibold">Introduction</h2>
                        <p class="mt-[13px] text-justify text-md">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry pecimen book. It has survived not only five centuries, but also the leap into electronic
                            typesetting, </p>

                        <p class="mt-[13px] text-justify text-md">
                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p class="mt-[13px] text-justify text-md">
                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    </div>
                </div>
                <div class="paragraph flex justify-center gap-[30px] max-lg:flex-col-reverse max-lg:items-center">
                    <div class="txt lg:w-[45vw] max-lg:w-[80vw]">
                        <h2 class="mt-[15px] text-2xl font-semibold">Guidance</h2>
                        <p class="mt-[13px] text-justify text-md">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry pecimen book. It has survived not only five centuries, but also the leap into electronic
                            typesetting,
                            <p class="mt-[13px] text-justify text-md">
                                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        </p>

                        <button id="teamm" class="rounded-4xl text-white text-[13px] mt-4 border-none w-[130px] h-[42px]  transition-transform duration-100 ease-in-out hover:scale-103 active:scale-103 ">Team
                            Members</button>
                    </div>
                    <img class="lg:w-[32vw] rounded-xl transition-transform duration-200 ease-in-out hover:scale-101 max-lg:w-[80vw]"
                        src={Intro_img2} alt="" />
                </div>
            </div >

            {/* < !--================================= Sec 4: Mentors Message ================================ --> */}

            <div class="message lg:pt-[10vh] lg:h-[80vh] max-lg:h-auto max-lg:my-[5vh]">
                <h1 class="text-center pb-[30px] text-3xl font-semibold lg:mb-[10vh] max-lg:mb-[6vh]">Mentor's Message </h1>
                <div class="ccontainer lg:max-w-[80vw] m-auto flex  h-auto max-lg:flex-col lg:gap-[3vw] max-lg:gap-[8vh]">
                    <div
                        class="cards transition-transform duration-100 ease-in-out pb-5 px-[25px] bg-white m-auto rounded-3xl h-auto lg:w-[25vw] max-lg:w-[70vw]">
                        <img class="w-[80px] relative top-[-45px] left-[-5px] mb-[-25px]" src={principle_img} alt="" />
                        <div class="box">
                            <p class="text-[13px]">1960s with the release of Letraset sheets containing Lorem Ipsum release of
                                Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                                PageMaker including versions of Lorem Ipsum.</p>
                            <div class="line  h-[1px] mb-3 mt-4 bg-[#0000001a] "></div>
                            <p class="text-[12px] mt-3">Dr. Rajeev Chandak</p>
                            <p class="text-[12px] text-[#00000066] ">Principle of JEC Jabalpur</p>
                        </div>
                    </div>
                    <div
                        class="cards transition-transform duration-100 ease-in-out pb-5 px-[25px] bg-white m-auto rounded-3xl h-auto lg:w-[25vw] max-lg:w-[70vw]">
                        <img class="w-[80px] relative top-[-45px] left-[-5px] mb-[-25px]" src={principle_img} alt="" />
                        <div class="box">
                            <p class="text-[13px]">1960s with the release of Letraset sheets containing Lorem Ipsum release of
                                Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                                PageMaker including versions of Lorem Ipsum.</p>
                            <div class="line  h-[1px] mb-3 mt-4 bg-[#0000001a] "></div>
                            <p class="text-[12px] mt-3">Dr. Rajeev Chandak</p>
                            <p class="text-[12px] text-[#00000066] ">Principle of JEC Jabalpur</p>
                        </div>
                    </div>
                    <div
                        class="cards transition-transform duration-100 ease-in-out pb-5 px-[25px] bg-white m-auto rounded-3xl h-auto lg:w-[25vw] max-lg:w-[70vw]">
                        <img class="w-[80px] relative top-[-45px] left-[-5px] mb-[-25px]" src={principle_img} alt="" />
                        <div class="box">
                            <p class="text-[13px]">1960s with the release of Letraset sheets containing Lorem Ipsum release of
                                Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                                PageMaker including versions of Lorem Ipsum.</p>
                            <div class="line  h-[1px] mb-3 mt-4 bg-[#0000001a] "></div>
                            <p class="text-[12px] mt-3">Dr. Rajeev Chandak</p>
                            <p class="text-[12px] text-[#00000066] ">Principle of JEC Jabalpur</p>
                        </div>
                    </div>




                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home