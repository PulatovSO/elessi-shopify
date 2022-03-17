import React, { useState } from 'react';
import './Collection.css';
import api from '../../assets/api/api';
import { Link } from 'react-router-dom';
import Block from '../Block/Block';
import Pagination from '../Pagination/Pagination';

const Collection = () => {

    const [grid, setGrid] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(12);

    // get current posts
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProduct = api.slice(indexOfFirstProduct, indexOfLastProduct)

    // change pages
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div className='categories'>
            <div className="categories__showcase">
                <h1 className="categories__header">Organic</h1>
            </div>
            <div className="container">
                <div className="categories__grid grid">
                    <button onClick={() => setGrid(5)} className='grid__btn'>
                        <Block color={grid !== 5 ? 'block' : 'block active-block'} />
                        <Block color={grid !== 5 ? 'block' : 'block active-block'}/>
                    </button>    
                    <button onClick={() => setGrid(4)} className='grid__btn'>
                        <Block color={grid !== 4 ? 'block' : 'block active-block'}/>
                        <Block color={grid !== 4 ? 'block' : 'block active-block'}/>
                        <Block color={grid !== 4 ? 'block' : 'block active-block'}/>
                    </button>    
                    <button onClick={() => setGrid(3)} className='grid__btn'>
                        <Block color={grid !== 3 ? 'block' : 'block active-block'}/>
                        <Block color={grid !== 3 ? 'block' : 'block active-block'}/>
                        <Block color={grid !== 3 ? 'block' : 'block active-block'}/>
                        <Block color={grid !== 3 ? 'block' : 'block active-block'}/>
                    </button>    
                    <button onClick={() => setGrid(2)} className='grid__btn'>
                        <Block color={grid !== 2 ? 'block' : 'block active-block'}/>
                        <Block color={grid !== 2 ? 'block' : 'block active-block'}/>
                        <Block color={grid !== 2 ? 'block' : 'block active-block'}/>
                        <Block color={grid !== 2 ? 'block' : 'block active-block'}/>
                        <Block color={grid !== 2 ? 'block' : 'block active-block'}/>
                        <Block color={grid !== 2 ? 'block' : 'block active-block'}/>
                    </button>    
                </div>
                <div className={grid === 5 ? `row justify-content-center` : 'row'}>
                    {
                        currentProduct.map((item) => {
                            return (
                                <div className={`product col-md-${grid}`} key={item.id * 100}> 
                                    <Link to='/' className="product__inner">
                                        <img className='product__image' src={item.image} alt="product" />
                                        <img className='product__image-hover' src={item.imageHover} alt="product" />
                                        <h1 className='product__title'>{item.name}</h1>
                                        <span className='product__price'>${item.price}</span>
                                        <button className='product__like'><i class='bx bx-heart'></i></button>
                                        <button className='product__view product__btn'><i class='bx bx-low-vision'></i></button>
                                        <button className='product__add product__btn'><i class='bx bx-shopping-bag' ></i></button>
                                    </Link>
                                </div>
                            )
                        }                            
                        )
                    }
                </div>
                <Pagination 
                    productPerPage={productPerPage} 
                    totalProduct={api.length} 
                    paginate={paginate}
                />
            </div>
        </div>
    );
}

export default Collection;
