import React from 'react';
import { Link } from 'react-router-dom';
import './ModalFooter.css';

const Modalfooter = () => {
    return (
            <table className='modal__table table'>
                <tr className="table__row">
                    <td className='table__title'>Vendor:</td>
                    <td className='table__desc'>
                        <Link className='table__link' to={'/'}>Elessi shopify theme 2</Link>
                    </td>
                </tr>
                <tr className="table__row">
                    <td className='table__title'>SKU:</td>
                    <td className='table__desc'>N/A</td>
                </tr>
                <tr className="table__row">
                    <td className='table__title'>availibility:</td>
                    <td className='table__desc'>
                       <Link className='table__link table__link-active' to={'/'}>in stock</Link> 
                    </td>
                </tr>
                <tr className="table__row">
                    <td className='table__title'>category:</td>
                    <td className='table__desc'>
                        <Link className='table__link' to={'/'}>organic. </Link>
                        <Link className='table__link' to={'/'}>organic 2. </Link>
                        <Link className='table__link' to={'/'}>fruits. </Link>
                        <Link className='table__link' to={'/'}>organic 3. </Link>
                    </td>
                </tr>
                <tr className="table__row">
                    <td className='table__title'>Tags:</td>
                    <td className='table__desc'>
                        <Link className='table__link' to={'/'}>Apples & bananas. </Link>
                        <Link className='table__link' to={'/'}>fruits. </Link>
                        <Link className='table__link' to={'/'}>organics. </Link>
                        <Link className='table__link' to={'/'}>vegetables. </Link>
                        <Link className='table__link' to={'/'}>woo2shopify </Link>
                    </td>
                </tr>
                <tr className="table__row">
                    <td className='table__title'>Share on:</td>
                    <td className='table__desc'>
                        <a className='modal__social' href='#'><i class='bx bxl-facebook'></i></a>
                        <a className='modal__social' href='#'><i class='bx bxl-twitter' ></i></a>
                        <a className='modal__social' href='#'><i class='bx bxl-google-plus' ></i></a>
                        <a className='modal__social' href='#'><i class='bx bxs-envelope' ></i></a>
                        <a className='modal__social' href='#'><i class='bx bxl-pinterest' ></i></a>
                    </td>
                </tr>
            </table>
    );
}

export default Modalfooter;
