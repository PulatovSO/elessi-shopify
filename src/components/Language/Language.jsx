import React from 'react';
import './Language.css';

function Language() {
  return (
    <div className="lang">
      <button className="lang__current">Eng <i className='bx bx-chevron-down'></i></button>
      <ul className="lang__list">
        <li className="lang__item">Eng</li>
        <li className="lang__item">Uzb</li>
      </ul>
    </div>
  )
}

export default Language;
