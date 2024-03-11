import React, { useState } from 'react'
import './Modal.css'

const Modal = () => {

const [modal, setModal] = useState(false);

const toggleModal = () => {
    setModal(!modal)
}

  return (
    <>
    <button onClick={toggleModal} className= "btn-modal"> Open </button>
  
    
    {modal && (
        <div className='modal'>
        <div className='overlay' onClick={toggleModal}></div>
        <div className='modal-content'>
            <h2>test test</h2>
            <p>p test</p>
        <button className='close-modal' onClick={toggleModal}>CLOSE</button>
        </div>
    </div>
    )}
    

    </>

  )
}

export default Modal