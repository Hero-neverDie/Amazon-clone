import React from 'react'
import "./Home.css"
import Product from "./Product"
function Home() {
    return (
        <div className="home">
            <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/GlobalStore/US_AU_1500x600_1218557_1136094_au_xsite_desktop_hero._CB436107284_.jpg"
                className="home__image"
            />
         


            <div className="home__row">

                <Product
                id="123"
                title="nice product balbalbalbalbabalbalbalbablablbalblabal"
                price={11}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41TWHhFUC3L._AC_SY200_.jpg"
                
                />
                <Product
                id="123"
                title="nice product"
                price={11}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41TWHhFUC3L._AC_SY200_.jpg"
                
                />
            </div>
            <div className="home__row">

                <Product
                id="123"
                title="nice product balbalbalbalbabalbalbalbablablbalblabal"
                price={11}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41TWHhFUC3L._AC_SY200_.jpg"

                />
                <Product
                id="123"
                title="nice product balbalbalbalbabalbalbalbablablbalblabal"
                price={11}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41TWHhFUC3L._AC_SY200_.jpg"

                />
                <Product
                id="123"
                title="nice product"
                price={11}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41TWHhFUC3L._AC_SY200_.jpg"

                />
            </div>
        </div>
    )
}

export default Home
