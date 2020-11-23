import React from 'react'

const itemsAdded = props => {
    return (
        <div className="display_totals">
            <div className="button-layout right">
                <button className="poppins item-layout" type="button">Add Item</button>
                <button className="poppins item-layout" type="button">Subtotals</button>
            </div>
        </div>
    )
};

export default itemsAdded;