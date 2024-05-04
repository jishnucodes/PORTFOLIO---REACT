import React from 'react'
import { Link } from 'react-scroll'

import './About.css'
import { Container } from 'react-bootstrap'

const About = () => {
    return (
        <div className='about-section py-5'>
            <Container>
            <div className="header text-center py-4">
                <h1 className='text-capitalize'>What i do</h1>
            </div>
            <div className="para text-start text-lg-center  px-sm-5">
                <p>
                    I am a passionate and expert web developer who is entering the world of full-stack development. 
                    I love learning new things and being creative so for me what makes it happen is creating new ideas 
                    that can connect back-end to front-end seamlessly. My skills include HTML, CSS, JavaScript, React.js, 
                    Node.js, Express js and MongoDB which makes me ready for any challenge related with web designing industry 
                    as it keeps changing from time to time.
                </p>
            </div>
            <div className="box px-2 mt-5 py-3 mb-3 d-flex flex-row justify-content-start align-items-center gap-4">
                <div className="left-section align-self-start">
                    <img src="https://www.atulhost.com/wp-content/uploads/2019/05/create-a-website.jpg" alt="web-design-img" />
                </div>
                <div className="right-section">
                    <h2>Website design</h2>
                    <p>HTML, CSS, BOOTSTRAP, TAILWIND</p>
                </div>
            </div>
            <div className="box px-2  py-3 mb-3 d-flex flex-row justify-content-start align-items-center gap-4">
                <div className="left-section align-self-start">
                    <img src="https://inspireweb-design.com/wp-content/uploads/2020/01/9.jpeg" alt="web-design-img" />
                </div>
                <div className="right-section">
                    <h2>Web development</h2>
                    <p>
                        <span>MERN STACK</span>-MongoDB, Express.js, React.js, Node.js
                    </p>
                </div>
            </div>
            <div className='text-center mt-4'>

            <Link to="" className='cv-button'>Get my cv</Link>
            </div>

            </Container>

        </div>
    )
}

export default About
