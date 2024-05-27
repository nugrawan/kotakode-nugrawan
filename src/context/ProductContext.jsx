// contexts/ProductContext.js
import { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [activeIssuesIndex, setActiveIssuesIndex] = useState(0);
    const [activeProductsIndex, setActiveProductsIndex] = useState(0);
    const [activeLeaderboardIndex, setActiveLeaderboardIndex] = useState(0);

    return (
        <ProductContext.Provider value={{ activeIssuesIndex, setActiveIssuesIndex, activeProductsIndex, setActiveProductsIndex, activeLeaderboardIndex, setActiveLeaderboardIndex }}>
            {children}
        </ProductContext.Provider>
    );
};
