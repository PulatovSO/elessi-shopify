import { createContext, React, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([
        {
            id: 1,
            name: 'Plum tomato',
            category: 'fruits',
            price: '15.00', 
            image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/mini-plum-tomato_540x.jpg?v=1565592563',
            imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/mini-plum-tomato-3_540x.jpg?v=1565592563',
            popularity: 'top'
        },
        {
            id: 2,
            name: 'pinkerton avocado',
            category: 'fruits',
            price: '5.00', 
            image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado_540x.jpg?v=1565594363',
            imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado-1_540x.jpg?v=1565594363',
            popularity: 'top'
        },
        {
            id: 3,
            name: 'red pithaya',
            category: 'fruits',
            price: '15.00', 
            image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-pithaya-with-white-pulp-4_540x.jpg?v=1565594423',
            imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-pithaya-with-white-pulp-1_540x.jpg?v=1565594423',
            popularity: 'top'
        },
        {
            id: 4,
            name: 'banana',
            category: 'fruits',
            price: '18.00', 
            image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/chiquita-bananas_540x.jpg?v=1565594302',
            imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/54d367b3-614b-4208-bfdb-b9a4e52cdeb9_540x.jpg?v=1565594302',
            popularity: 'best'
        },
        {
            id: 5,
            name: 'fresh strawberries',
            category: 'fruits',
            price: '10.00', 
            image: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-strawberries-4_540x.jpg?v=1565591604',
            imageHover: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-strawberries-2_540x.jpg?v=1565591604',
            popularity: 'best'
        }
    ]);

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext