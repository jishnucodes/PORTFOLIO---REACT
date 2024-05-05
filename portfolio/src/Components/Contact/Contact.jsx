import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

import './Contact.css'
import axios from '../../axios/axios';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [info, setInfo] = useState("");
    const [subject, setSubject] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("name", name)
        formData.append("email", email)
        formData.append("subject", subject)
        formData.append("info", info)

        console.log(formData)

        try {
            const response = await axios.post('/send-email', formData,{
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='contact-section py-5'>
            <Container>
                <div className="contact-container d-flex flex-column justify-content-center align-items-center">
                    <div className="header">
                        <h1 className='mb-2'>Contact me</h1>
                    </div>
                    <p className='info'>
                        Please fill out the form below to discuss any work opportunities

                    </p>
                    <div className="form-container w-75">
                        <form className='d-flex flex-column gap-2 justify-content-start align-items-center w-100' onSubmit={handleSubmit}>
                            <input 
                               type="text"
                               name='name' 
                               placeholder='Your Name' 
                               className='mt-3 px-3 py-3 w-100'
                               value={name}
                               onChange={(event) => setName(event.target.value)} 
                            />{name}
                            <input 
                               type="email"
                               name='email' 
                               placeholder='Your Email' 
                               className='mt-3 px-3 py-3 w-100'
                               value={email} 
                               onChange={(event) => setEmail(event.target.value)}
                            />{email}
                             <input 
                               type="text"
                               name='subject' 
                               placeholder='Subject' 
                               className='mt-3 px-3 py-3 w-100'
                               value={subject} 
                               onChange={(event) => setSubject(event.target.value)}
                            />
                            <textarea 
                               placeholder='Your Message' 
                               rows={8} 
                               name='info'
                               className='mt-3 px-3 py-3 w-100'
                               value={info}
                               onChange={(event) => setInfo(event.target.value)}
                            >
                            </textarea>
                            <div className="submit-button mt-4">
                                <button>Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Contact
