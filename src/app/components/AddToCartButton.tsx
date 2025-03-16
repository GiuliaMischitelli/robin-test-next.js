"use client";
import React, { useCallback, useContext } from 'react';
import Image from 'next/image';
import {ShoppingCartContext} from '../providers/ShoppingCartProvider';

function AddToCartButton() {
    const { count, setCount } = useContext(ShoppingCartContext);
    const addTocart = useCallback(() => {
        if(setCount) setCount(count + 1);
    }, [count]);
    return (
        <button className="add-to-cart primary" onClick={addTocart}>
            <Image src="/add_shopping_cart.svg" alt="cart icon" width={20} height={20} className="icon-image" />
        </button>
    )
}

export default AddToCartButton