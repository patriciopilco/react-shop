import { useState } from 'react';

const initialState = {
    cart: [],
}

const useInitialState =()=>{
    const [state, setState] = useState(initialState);
    const addToCart = (payload) => {
        setState({
            ...state, // traer el estado actual
            cart: [...state.cart, payload] // agrear lo que se envia
        });
    };

    return {
        state,
        addToCart
    }
}

export default useInitialState;