import React from 'react'
import event_img1 from '../assets/Images/event_img1.jpg'
import event_img2 from '../assets/Images/event_img2.jpeg'
import event_img3 from '../assets/Images/event_img3.webp'
import updates_img from '../assets/Images/updates_img.jpg'

const Updates = () => {
    return (
        <>
            <main class="bg-gradient-to-r from-[#002244] to-[#0C5CAC] text-white px-5 py-10">

                {/* <!-- Latest Event --> */}
                <h1 class="text-center text-[36px] font-bold">Events Conducted by Us</h1>
                <div class="flex flex-wrap justify-center items-center gap-10 mt-10">
                    <div class="max-w-[600px]">
                        <p class="text-[32px] font-semibold">Hackathon 2.0</p>
                        <p class="text-[18px] leading-relaxed mt-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deleniti culpa perferendis, fugiat rerum totam
                            iste iusto? Maxime sint labore quia laudantium, officiis repellendus. Nulla molestiae ipsam dolores mollitia
                            perferendis dolorum error quibusdam suscipit iste quasi impedit quo, laborum dolorem ea officiis qui.
                            Obcaecati similique tempora iure aut optio? Maiores consequuntur assumenda ex laudantium voluptates esse
                            aliquam molestias doloribus, accusantium in! Quaerat similique nobis, odit tempora provident est fugit, atque,
                            porro consequuntur aspernatur ipsam sed et temporibus voluptas optio impedit animi quisquam cumque nisi harum?
                            In aliquid reiciendis nostrum minima magni laborum explicabo debitis enim corrupti!
                        </p>
                        <button
                            class="mt-4 px-4 py-2 bg-[#0C5CAC] text-white text-[15px] rounded-md cursor-pointer hover:bg-[#003366]">Read
                            more</button>
                    </div>
                    <img src={updates_img} alt="" class="max-w-[400px] w-full rounded-lg shadow-lg" />
                </div>
            </main>

            {/* <!-- Event Cards --> */}
            <main class="bg-white px-5 py-10">
                <div class="flex flex-wrap justify-center gap-8">
                    <div
                        class="bg-[#f1f3f5] rounded-xl w-[320px] p-5 shadow-lg hover:-translate-y-1 transition-transform duration-300">
                        <img src={event_img1} alt="" height="200px" class="w-full rounded-lg object-cover mb-4" />
                        <p class="text-[22px] font-semibold mb-2">Hackathon 1.0</p>
                        <p class="text-[16px] leading-relaxed text-[#333]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Obcaecati corrupti necessitatibus molestiae in quam earum deserunt, reiciendis atque ullam. Beatae dolore
                            labore saepe fugit, ab at impedit illo dolores quaerat qui! Asperiores.</p>
                        <button
                            class="mt-4 px-4 py-2 bg-[#0C5CAC] text-white text-[15px] rounded-md cursor-pointer hover:bg-[#003366]">Read
                            more</button>
                    </div>

                    <div
                        class="bg-[#f1f3f5] rounded-xl w-[320px] p-5 shadow-lg hover:-translate-y-1 transition-transform duration-300">
                        <img src={event_img2} alt="" height="200px" class="w-full rounded-lg object-cover mb-4" />
                        <p class="text-[22px] font-semibold mb-2">Summer School</p>
                        <p class="text-[16px] leading-relaxed text-[#333]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Earum laborum, voluptatum, doloremque est voluptate nam asperiores error inventore sed non atque odio hic
                            fuga! Id dolores earum saepe vitae corporis tenetur quo.</p>
                        <button
                            class="mt-4 px-4 py-2 bg-[#0C5CAC] text-white text-[15px] rounded-md cursor-pointer hover:bg-[#003366]">Read
                            more</button>
                    </div>

                    <div
                        class="bg-[#f1f3f5] rounded-xl w-[320px] p-5 shadow-lg hover:-translate-y-1 transition-transform duration-300">
                        <img src={event_img3} alt="" height="200px" class="w-full rounded-lg object-cover mb-4" />
                        <p class="text-[22px] font-semibold mb-2">Lab Inauguration</p>
                        <p class="text-[16px] leading-relaxed text-[#333]">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Assumenda similique vero sequi quia quae maxime molestiae fugit exercitationem sint commodi, quis odit vel
                            facilis tempore, dicta asperiores enim delectus omnis dolore incidunt.</p>
                        <button
                            class="mt-4 px-4 py-2 bg-[#0C5CAC] text-white text-[15px] rounded-md cursor-pointer hover:bg-[#003366]">Read
                            more</button>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Updates