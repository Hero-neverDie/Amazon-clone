import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { Checkbox } from '@material-ui/core';

import {getBasketTotal } from "./reducer"
function Subtotal() {
    const [{basket}] = useStateValue();
    return (
        <div className="subtotal">
            <h4>subtotal is ${getBasketTotal(basket)}</h4>
            <div className="checkbox">
                <input type="checkbox" /> this contains gift 
            </div>
            <button>check out</button>
            
        </div>
    )
}

export default Subtotal
