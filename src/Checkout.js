import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal"
import CurrencyFormat from "react-currency-format"
function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">

                <img className="checkout_ad" src="https://marketingland.com/wp-content/ml-loads/2014/08/amazon-circles-1920.png"></img>
                {basket?.length === 0 ? (
                    <div>                    
                        <h2>Your shopping basket is empty</h2>
                        <p>
                            You have no items in your basket
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">your shopping basket</h2>
                        {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                            
                            ))}
                    </div>
                )}
            </div>
            <div>
                <Subtotal></Subtotal>
            </div>
        </div>


    )
}

export default Checkout
