import React, {useState} from 'react'
import './item.scss'

import image_404 from '../assets/images/image-not-found.jpg'

function updateItemTotal(value) {
    let itemTotal = 0;
    let currentItemTotal = parseInt(document.getElementById('item_total').innerText.split(" ")[0]);
    itemTotal = currentItemTotal + value;
    document.getElementById('item_total').childNodes[0].textContent = itemTotal + " Items Added";
}

export default function Item(props) {
    const {
        itemNumber,
        createName,
        createDescription,
        createQuantity,
        createPrice,
    } = props;

    const [itemQuantity, setItemQuantity] = useState(createQuantity);
    const [itemPrice, setPrice] = useState(createPrice);

    return (
        <div id={itemNumber} className="center item item-border">
            <img src={image_404} alt="404, Resource not found" className="display_size" />
            <div className="description">
                <h1 className="poppins header_font">{createName}</h1>
                <h1 className="poppins description_font">{createDescription}</h1>
                <div className="center button-layout">
                    <button type="button" onClick={() => {
                        if (itemQuantity > 0)
                            setItemQuantity(itemQuantity - 1);
                        if (itemQuantity === 1)
                            updateItemTotal(-1);
                    }}>-</button>
                    <input id={"input" + itemNumber} type="text" className="poppins description_font price_layout" value={itemQuantity} onInput={() => {
                        if (isNaN(parseInt(document.getElementById("input" + props.itemNumber).value)))
                            setItemQuantity(0)
                        else
                            setItemQuantity(parseInt(document.getElementById("input" + props.itemNumber).value));
                    }}></input>
                    <button type="button" onClick={() => {
                        if (itemQuantity === 0)
                            updateItemTotal(1);
                        setItemQuantity(itemQuantity + 1);
                    }}>+</button>
                    <button onClick={() => {
                        if (itemQuantity > 0)
                            updateItemTotal(-1);
                        document.getElementById(itemNumber).remove();
                    }}><i className="far fa-trash-alt"></i></button>
                </div>
            </div>
            <div className="price">
                <h1 className="poppins header_font">${itemPrice}</h1>
            </div>
        </div>
    )
}