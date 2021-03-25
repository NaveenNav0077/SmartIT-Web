import React from 'react';
import './products.scss';

import screen1 from '../../asserts/appImages/screen-1.jpg';
import screen3 from '../../asserts/appImages/screen-3.jpg';
import screen4 from '../../asserts/appImages/screen-4.jpg';
import screen6 from '../../asserts/appImages/screen-6.jpg';

function Products() { 
    return (
        <div id="products" className="products">
            <div className="products__text">
                <h1 className="products__text__h1">Everything at your finger tip</h1>
            </div>
            <div className="products__cards">
                <div className="products__cards__card">
                    <img className="products__cards__card__img" src={screen1} alt="" />
                </div>

                <div className="products__cards__card">
                    <img className="products__cards__card__img" src={screen3} alt="" />
                </div>

                <div className="products__cards__card">
                    <img className="products__cards__card__img" src={screen4} alt="" />
                </div>

                <div className="products__cards__card">
                    <img className="products__cards__card__img" src={screen6} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Products
