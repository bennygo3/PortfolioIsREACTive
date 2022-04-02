import React from 'react';
import './Contact.css';



const Contact = () => {
    return (
        <div>
           
            <form  >
                <label id="form">
                    Name:
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        name="name"

                    />
                    <br></br>
                    Email:
                    <input
                        type="text"
                        placeholder="Email"
                        required
                        name="email"

                    />
                    <br></br>
                    Message:
                    <textarea
                        type="text"
                        placeholder="Leave a message!"
                        required
                        name="message"

                    />

                    <button type='submit'
                        className='submit-btn'>Enter</button>

                </label>

            </form>
            
        </div>
    )

}

export default Contact;

