import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import profileImg from '../../assets/images/cheriyamma sun new  1.jpg'

import './intro.css';

function Intro() {
  return (
    <section className='intro-content py-5'>
        <Container>
            <Row>
                <Col lg={6} className='left-section  gy-2'>
                    <span className='mt-1'>Hello,</span>
                    <h1 className='mt-2'>I'm <span className='name'>Jishnu</span></h1>
                    <h1 className='mt-2'>FullStack Developer</h1>
                    <p className='mt-4'>I'm a skilled and passionate web developer. I have a good knowledge in creating fullstack application.</p>
                    <button className='btn my-2'>Hire Me</button>
                </Col>
                <Col lg={6}  className='right-section gy-4'>
                    <article className='profile text-center'>
                        <img src={profileImg} alt="avatar" className='img-fluid' />
                    </article>
                </Col>
            </Row>

        </Container>
    </section>
  )
}

export default Intro;