import React, { useState } from 'react'
import './Newsletter.css'


const Newsletter = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
    setModal(!modal)}

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regEx.test(email)) {
          toggleModal(); setMessage("");
        } else if (!regEx.test(email) && email !== "") {
          setMessage("Please enter a valid email address.");
        } else {
          setMessage("");
        }
    }


    const handleOnChange=(e)=>{
        setEmail(e.target.value);
    }

    return (
        <div>
          <div className='newsletter-content'>
            <h2 className='newsletter-h2'>Subscribe to our newsletter</h2>
          
          <div className="newsletter-background">
          <p className='newsletter-text'>Follow our story and get the latest promotional news about our products and events.</p>
          <br></br>
          
            <div className='email-block'>
                <label htmlFor="email" className="label">
                </label>
                <input
                id="email"
                className="input"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={handleOnChange}
                />
                <button onClick={emailValidation} className='newsletter-search-button'>Subscribe</button>
                


                {modal && (
        <div className='modal'>
        <div className='overlay' onClick={toggleModal}></div>
        <div className='modal-content'>
            <h2 className='modal-h2'>Thank you for subcribing to Liana Newsletter</h2>
            <br></br>
            <p>Let your mind be at ease.</p>
            <br></br>
            <p>We will keep you updated on upcoming products and events.</p>
        <button className='close-modal' onClick={toggleModal}>Close</button>
        </div>
    </div>
    )}

            </div>
            <div className='fix-message'><p className="message">{message}</p></div>
            </div>
          </div>
        </div>
      );
}

export default Newsletter