import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';
import card1 from '../../assets/images/card1.webp';
import card2 from '../../assets/images/card2.webp';
import card3 from '../../assets/images/card3.webp';

const Cards = () => {
    return (
        <div className='cards'>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="cards__item card col-lg-4 col-md-12">
                        <div className="card__inner">
                            <img className='card__img' src={card1} alt="card" />
                            <h3 className="card__title">Joobie <br /> ice cream</h3>
                            <Link className="card__link" to='/'>Shop now</Link>
                        </div>
                    </div>
                    <div className="cards__item card col-lg-4 col-md-12">
                        <div className="card__inner">
                            <img className='card__img' src={card2} alt="card" />
                            <h3 className="card__title">Fresh <br /> guava juice</h3>
                            <Link className="card__link" to='/'>Shop now</Link>
                        </div>
                    </div>
                    <div className="cards__item card col-lg-4 col-md-12">
                        <div className="card__inner">
                            <img className='card__img' src={card3} alt="card" />
                            <h3 className="card__title">Fresh <br /> vegetables</h3>
                            <Link className="card__link" to='/'>Shop now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
