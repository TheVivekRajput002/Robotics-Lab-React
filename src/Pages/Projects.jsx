import React from 'react'
import './pstyles.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Projects = () => {
    const handleContact = () => {
        // Add your contact handling logic here
        console.log('View Project clicked');
    };

    return (
        <>
        <Navbar />
            <div className="parent-container">
                <div className="card" style={{marginTop: '30px'}}>
                    <div className="content">
                        <div className="floating-elements">
                            <div className="floating-circle"></div>
                            <div className="floating-circle"></div>
                            <div className="floating-circle"></div>
                        </div>

                        <div className="about-label">Project-1</div>

                        <h1 className="title">Heading of project</h1>

                        <p className="description">
                            <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum delectus eos, ut tenetur quae quasi sequi soluta, et velit ipsa, beatae reiciendis suscipit obcaecati officia? Deserunt quia incidunt magni similique!
                        </p>

                        <div className="actions">
                            <button className="contact-btn" onClick={handleContact}>View Project</button>
                        </div>
                    </div>

                    <div className="image-section">
                        <img src="https://i.pinimg.com/736x/76/32/7d/76327d3b6c8bee75a6f294816575b1b0.jpg"
                            alt="Industrial Technology"
                            className="main-image" />
                    </div>
                </div>

                <div className="card">
                    <div className="content">
                        <div className="floating-elements">
                            <div className="floating-circle"></div>
                            <div className="floating-circle"></div>
                            <div className="floating-circle"></div>
                        </div>

                        <div className="about-label">Project-2</div>

                        <h1 className="title">Heading of project</h1>

                        <p className="description">
                            <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum delectus eos, ut tenetur quae quasi sequi soluta, et velit ipsa, beatae reiciendis suscipit obcaecati officia? Deserunt quia incidunt magni similique!
                        </p>

                        <div className="actions">
                            <button className="contact-btn" onClick={handleContact}>View Project</button>
                        </div>
                    </div>

                    <div className="image-section">
                        <img src="https://i.pinimg.com/736x/76/32/7d/76327d3b6c8bee75a6f294816575b1b0.jpg"
                            alt="Industrial Technology"
                            className="main-image" />
                    </div>
                </div>

                <div className="card">
                    <div className="content">
                        <div className="floating-elements">
                            <div className="floating-circle"></div>
                            <div className="floating-circle"></div>
                            <div className="floating-circle"></div>
                        </div>

                        <div className="about-label">Project-3</div>

                        <h1 className="title">Heading of project</h1>

                        <p className="description">
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum delectus eos, ut tenetur quae quasi sequi soluta, et velit ipsa, beatae reiciendis suscipit obcaecati officia? Deserunt quia incidunt magni similique!
                        </p>

                        <div className="actions">
                            <button className="contact-btn" onClick={handleContact}>View Project</button>
                        </div>
                    </div>

                    <div className="image-section">
                        <img src="https://i.pinimg.com/736x/76/32/7d/76327d3b6c8bee75a6f294816575b1b0.jpg"
                            alt="Industrial Technology"
                            className="main-image" />
                    </div>
                </div>

                <div className="card">
                    <div className="content">
                        <div className="floating-elements">
                            <div className="floating-circle"></div>
                            <div className="floating-circle"></div>
                            <div className="floating-circle"></div>
                        </div>

                        <div className="about-label">Project-4</div>

                        <h1 className="title">Heading of project</h1>

                        <p className="description">
                            <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum delectus eos, ut tenetur quae quasi sequi soluta, et velit ipsa, beatae reiciendis suscipit obcaecati officia? Deserunt quia incidunt magni similique!
                        </p>

                        <div className="actions">
                            <button className="contact-btn" onClick={handleContact}>View Project</button>
                        </div>
                    </div>

                    <div className="image-section">
                        <img src="https://i.pinimg.com/736x/76/32/7d/76327d3b6c8bee75a6f294816575b1b0.jpg"
                            alt="Industrial Technology"
                            className="main-image" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Projects