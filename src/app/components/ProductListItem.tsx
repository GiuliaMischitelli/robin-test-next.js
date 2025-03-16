"use client"
import React from 'react';
import Image from 'next/image';
import { IProduct } from '../models/IProduct';
import Link from 'next/link';
import RatingComponent from './RatingComponent';
import AddToCartButton from './AddToCartButton';

interface IProductListItem {
    product: IProduct;
}

const ProductListItem: React.FC<IProductListItem> = ({ product }) => {

    return (
        <div className="grid-item card">
            <Image src={product.thumbnail} alt={product.title} width={200} height={200} />
            <div className="card-content">
                <Link href={`/product/${product.id}`} target="_blank">
                    <h2>{product.title}</h2>
                </Link>
                <AddToCartButton />
                <p className="price">Price: ${product.price.toFixed(2)}</p>
                <RatingComponent rating={product.rating} />
            </div>
        </div >
    )
}

export default ProductListItem;