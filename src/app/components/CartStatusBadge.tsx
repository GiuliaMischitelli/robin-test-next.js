"use client";

import React, { useContext } from 'react'
import Image from 'next/image';
import { ShoppingCartContext } from '../providers/ShoppingCartProvider';

function CartStatusBadge() {
    const { count } = useContext(ShoppingCartContext);
    return (
        <div className="shopping-cart">
            <Image src="/shopping_cart.svg" alt="cart icon" width={30} height={30} className="icon-image" />
            {count > 0 && <span className="badge">{count}</span>}
        </div>
    )
}

export default CartStatusBadge