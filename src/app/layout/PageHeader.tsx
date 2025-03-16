import React from 'react';
import Image from 'next/image';
import CartStatusBadge from '../components/CartStatusBadge';
import ThemeToggle from '../components/ThemeToggle';

function Header() {

    return (
        <header className="header-container">
            <div className="left">
                <Image src="/shoppingmode_beige.ico" width={60} height={60} alt="shopping logo" className="logo"/>
                <h1 className="center">Shoppify</h1>
            </div>
            <div className="right">
            <CartStatusBadge />
            <ThemeToggle/>
            </div>
        </header>
    )
}

export default Header