import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasket from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider';
import {auth} from "./firebase"

function Header() {
    const [{basket,user}] = useStateValue();
    console.log(basket)

    const login = () =>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            <Link to="/">
                <img 
                className="header_logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>

            {/* search box  */}
            <div className="header_search">
                <input type="text" className="header_searchInput"/>
                <SearchIcon className="header_searchIcon "/>
            </div>

            {/* login buttons */}
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user ? "Sign out" : "Sign in"} </span>
                    </div>
                </Link>


                <Link to ="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to ="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>


                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasket/>
    <span className="header__optionLineTwo basketCount">{basket?.length}</span>
                    </div>
                
                </Link>

            </div>


        </nav>
    )
}

export default Header
