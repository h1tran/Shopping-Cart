import React from 'react'

const Subtotal = props => {
    var el = document.querySelectorAll('.item').length;
    return (
        <div className="center display_totals">
            <h1 className="poppins header_font">{el} Items Added</h1>
        </div>
    )
};

export default Subtotal;