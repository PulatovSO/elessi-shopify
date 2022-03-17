import * as React from 'react';
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
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modal__inner'>
                    {
                        api.map(item => {
                            if (item.id === current) {
                                return (
                                    <div className="modal__item row" key={item.id}>
                                        <div className="modal__image-wrap col-md-6 col-sm-12">
                                            <img className="modal__image" src={item.image} alt="current-image" />
                                        </div>
                                        <div className="modal__info col-md-6 col-sm-12">
                                            <h2 className="modal__header">{item.name}</h2>
                                            <span className="modal__price">${item.price}</span>
                                            <p className="modal__paragraph">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                                            <Link className='modal__link' to={'/product'}>view product details<i class='bx bx-chevron-right' ></i></Link>
                                            <p className="modal__quantity">hurry! only <span>11</span> left in stock</p>
                                            <div className="modal__progress">
                                                <div className="modal__progress-inner"></div>
                                            </div>
                                            <Counter />
                                            <Modalbuttons />
                                            <ModalBody />
                                            <Modalfooter />
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    <button className='modal__close' onClick={handleClose}>
                        <i className='bx bx-x'></i>
                    </button>
                </Box>
            </Modal>
        </>
    );
}

export default ModalPop;
