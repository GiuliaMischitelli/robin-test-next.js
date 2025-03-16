import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import RatingComponent from './RatingComponent';
import AddToCartButton from './AddToCartButton';


const BASE_URL = process.env.BASE_URL;

export interface IProductDetail {
    id: string;
}

const Product: FunctionComponent<IProductDetail> = (async ({ id }) => {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    const product = await res.json();
    return (
        <div className="product-detail">
            <div className="product-images">
                <Image src={product.thumbnail} alt={product.title} width={200} height={200} className="thumbnail" />

            </div>
            <div className="product-info">
                <div className="info-actions">
                    <h1 className="product-info-title">{product.title}</h1>
                    <div className="action-container">
                        <AddToCartButton />
                    </div>

                </div>
                <div className="product-description">{product.description}</div>
                <div className="brand">Brand: {product.brand}</div>
                <div className="category">Category: {product.category}</div>
                <div className="price">Price: ${product.price.toFixed(2)}</div>
                <div className="sku">SKU: {product.sku}</div>
                <div className="return-policy">Return Policy: {product.returnPolicy} days</div>
                <div className="shipping-info">Shipping: {product.shippingInformation}</div>
                <RatingComponent rating={product.rating} />
            </div>
        </div>
    )
});

export default Product