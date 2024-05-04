import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

import './Contact.css'

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("name", name)
        formData.append("email", email)
        formData.append("content", content)

        console.log(formData)
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
                            />
                            <input 
                               type="text"
                               name='email' 
                               placeholder='Your Email' 
                               className='mt-3 px-3 py-3 w-100'
                               value={email} 
                               onChange={(event) => setEmail(event.target.value)}
                            />
                            <textarea 
                               placeholder='Your Message' 
                               rows={8} 
                               name='content'
                               className='mt-3 px-3 py-3 w-100'
                               value={content}
                               onChange={(event) => setContent(event.target.value)}
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
