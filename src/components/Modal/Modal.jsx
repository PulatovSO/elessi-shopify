import React, { useState } from 'react';
import './Modal.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import api from '../../assets/api/api';
import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import Modalbuttons from '../ModalButtons/ModalButtons';
import ModalBody from '../ModalBody/ModalBody';
import Modalfooter from '../ModalFooter/ModalFooter';

const ModalPop = ({ open, handleOpen, handleClose, current }) => {
    const [addedBadge, setAddedBadge] = useState(false);

    const modalClose = () => {
        handleClose();
        setAddedBadge(false);
    }

    return (
        <>
            <Modal
                open={open}
                onClose={modalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modal__inner'>
                    <div className="modal__item row" key={current.id}>
                        <div className="modal__image-wrap col-md-6 col-sm-12">
                            <img className="modal__image" src={current.image} alt="current-image" />
                        </div>
                        <div className="modal__info col-md-6 col-sm-12">
                            <h2 className="modal__header">{current.name}</h2>
                            <span className="modal__price">${current.price}</span>
                            <p className="modal__paragraph">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                            <Link className='modal__link' to={`/product/${current.id}`}>view product details<i class='bx bx-chevron-right' ></i></Link>
                            <p className="modal__quantity">hurry! only <span>11</span> left in stock</p>
                            <div className="modal__progress">
                                <div className="modal__progress-inner"></div>
                            </div>
                            <Counter />
                            <Modalbuttons current={current} addedBadge={addedBadge} setAddedBadge={setAddedBadge} />
                            <ModalBody />
                            <Modalfooter />
                        </div>
                    </div>
                    <button className='modal__close' onClick={modalClose}>
                        <i className='bx bx-x'></i>
                    </button>
                </Box>
            </Modal>
        </>
    );
}

export default ModalPop;
