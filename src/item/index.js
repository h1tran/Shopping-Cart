import React, {useState} from 'react'
import './item.scss'

import image_404 from '../assets/images/image-not-found.jpg'

const Item = props => {
    const [itemQuantity, setItemQuantity] = useState(0);
    const [itemPrice, setPrice] = useState(34.99);
    return (
        <div className="center item item-border">
            <img src={image_404} alt="404, Resource not found" className="display_size" />
            <div className="description">
                <h1 className="poppins header_font">Metor Tool</h1>
                <h1 className="poppins description_font">Material used: Solid grey plastic</h1>
                <div className="center button-layout">
                    <button type="button" onClick={() => {
                        if (itemQuantity > 0)
                            setItemQuantity(itemQuantity - 1);
                    }}>-</button>
                    <h1 className="poppins description_font price_layout item-border">{itemQuantity}</h1>
                    <button type="button" onClick={() => {
                        setItemQuantity(itemQuantity + 1);
                    }}>+</button>
                    <button><i className="far fa-trash-alt"></i></button>
                </div>
            </div>
            <div className="price">
                <h1 className="poppins header_font">${itemPrice}</h1>
            </div>
        </div>
    )
};

export default Item;