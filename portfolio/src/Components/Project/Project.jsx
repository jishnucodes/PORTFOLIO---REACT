import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Button } from 'react-scroll';

import movieReviewImg from '../../assets/images/Screenshot (120).png';
import netFlixImg from '../../assets/images/Screenshot (121).png'

import './Project.css';


const Project = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className='project-section py-5'>
            <Container>
                <div className="header text-center mb-3">
                    <h1 className='text-capitalize'>My Project</h1>
                </div>
                <div className="para  py-3 text-start text-lg-center px-sm-5">
                    <p>
                        I take pride in paying attention to the smallest details and making sure that my work is
                        pixel perfect. I am excited to bring my skills to help businesses achieve their goals and
                        create a strong online presence.
                    </p>
                </div>
                <div className="project-list mt-5">
                    <h2 className='mt-2 mb-2'>Main Project</h2>
                    <Row>
                        <Col md={6}>
                            <Card style={{ width: '18rem' }} className='mt-3'>
                                <Card.Img variant="top" src={movieReviewImg} />
                                <Card.Body>
                                    <Card.Title>Movie Review and Rating Application</Card.Title>
                                    <Card.Text>
                                        {showMore ?
                                            "This app lets you read many different movie reviews. Only users who have created an account can post reviews; they can also add movies to their favorites list. The application pulls the movies from TMDB. The admin can add movies themselves, and keep an eye on which ones are getting good reviews or to peoples favorites."
                                            :
                                            "This app lets you read many different movie reviews. Only users who have created an account can post reviews; they can also "
                                        }
                                    </Card.Text>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Button variant="link" onClick={toggleShowMore} className='show-button'>
                                            {showMore ? "Less" : "More"}
                                        </Button>
                                        <button className='show-button'>
                                            <a href="https://movie-review-and-rating-application-client.vercel.app/" target='_blank' rel="noreferrer">
                                                View
                                            </a>
                                        </button>
                                    </div>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={6}>
                            <Card style={{ width: '18rem' }} className='mt-3'>
                                <Card.Img variant="top" src={netFlixImg} />
                                <Card.Body>
                                    <Card.Title>Netflix clone app</Card.Title>
                                    <Card.Text>
                                        {showMore ?
                                            "This app is a netflix clone that allows you to see different kinds of movies and watch the trailer video as well. Movie lists are shown from tmdb."
                                            :
                                            "This app is a netflix clone that allows you to see different kinds of movies and watch the trailer video as well. Movie lists are shown from tmdb."
                                        }
                                    </Card.Text>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Button variant="link" onClick={toggleShowMore} className='show-button'>
                                            {showMore ? "Less" : "More"}
                                        </Button>
                                        <button className='show-button'>
                                            <a href="https://netflix-app-clone-omega.vercel.app/" target='_blank' rel="noreferrer">
                                                View
                                            </a>
                                        </button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <div className="other-project py-5">
                        <h2 className='mt-3'>Other Project</h2>
                        <Row className='mt-5 gy-3'>
                            <Col xs={6} lg={3}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>ToDo List</Card.Title>
                                        <Card.Text>
                                            Created a ToDo List application using React.
                                        </Card.Text>
                                     
                                            <a href="" className='text-decoration-none'>Click here</a>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} lg={3}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title> GameCart Website </Card.Title>
                                        <Card.Text>
                                            created a GameCart website, using HTML, CSS and BOOTSTRAP.
                                        </Card.Text>
                                        
                                            <a href="" className='text-decoration-none'>Click here</a>
                                      
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} lg={3}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title> Pepsi clone website</Card.Title>
                                        <Card.Text>
                                            created a identical website of pepsi using HTML and CSS only.
                                        </Card.Text>
                                    
                                            <a href="" className='text-decoration-none'>Click here</a>
                              
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} lg={3}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title> Instagram Login Page </Card.Title>
                                        <Card.Text>
                                            created a login page of instagram using HTML and CSS.
                                        </Card.Text>
                                    
                                            <a href="https://jishnucodes.github.io/Instagram-Login-Page/" target='_blank' rel="noreferrer" className='text-decoration-none'>Click here</a>
                                       
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Project;
