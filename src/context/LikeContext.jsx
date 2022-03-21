import { createContext, React, useState } from 'react';

const LikeContext = createContext();

export function LikeProvider({ children }) {
    const [liked, setLiked] = useState([]);

    return (
        <LikeContext.Provider value={{liked, setLiked}}>
            {children}
        </LikeContext.Provider>
    )
}


export default LikeContext