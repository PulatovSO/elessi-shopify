import React, { useState } from 'react';
import './Pagination.css';

const Pagination = ({productPerPage, totalProduct, paginate}) => {
    const pageNubers = [];

    for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
        pageNubers.push(i)
    }

    return (
        <ul className='pagination row justify-content-center'>
            {
                pageNubers.map(number => (
                    <li className="page__item">
                        <button onClick={() => paginate(number)} className="page__link">
                            {number}    
                        </button>
                    </li>
                ))
            }
        </ul>
    );
}

export default Pagination;
