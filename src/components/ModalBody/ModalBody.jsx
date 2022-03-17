import React from 'react';
import './ModalBody.css';
import payment from '../../assets/images/payment.webp';

const ModalBody = () => {
    return (
        <div className='modal-body'>
            <p className="modal-body__paragraph"> 
                <span className='red-span'>10</span> sold in last <span className='red-span'>7</span> hours
            </p>
            <p className="modal-body__paragraph">
                Order in the next <span className='green-span'>3 hours 53 minutes</span> to get it by <u>Thursday 03/31/2022</u>
            </p>
            <img className='modal-body__image' src={payment} alt="payment" />
        </div>
    );
}

export default ModalBody;
