"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface IShoppingCartContext {
    count: number;
    setCount?: Dispatch<SetStateAction<number>>;
  }

const initialContext = {
    count: 0
};
const ShoppingCartContext = createContext<IShoppingCartContext>(initialContext);

function ShoppingCartContextProvider({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState<number>(0);
    const outContext = {
        count, setCount
    }
    return (
        <ShoppingCartContext.Provider value={outContext}>{children}</ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartContextProvider };