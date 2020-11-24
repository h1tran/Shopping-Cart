import React from 'react'
import AddItem from '../add_item/index.js';

const itemsAdded = props => {
    return (
        <div className="display_totals">
            <div className="button-layout right">
                <button className="poppins item-layout" type="button" onClick={() => {
                    AddItem();
                }}>Add Item</button>
                <button className="poppins item-layout" type="button">Checkout</button>
            </div>
        </div>
    )
};

export default itemsAdded;