import React from 'react';
import { IProduct } from '../models/IProduct';
import ProductListItem from './ProductListItem';
const BASE_URL = process.env.BASE_URL;
const ProductList = (async () => {
    let products = [];
    try {
        const res = await fetch(`${BASE_URL}/products`);
        products = await res.json();
    } catch (error) {
        console.error('Fetch error:', error);
    }

    return (
        <div className='grid-container'>
            {products && products.length > 0 && products.map((product: IProduct, index: number) => <ProductListItem key={`product-${index}`} product={product} />)}
        </div>

    )
});

export default ProductList;