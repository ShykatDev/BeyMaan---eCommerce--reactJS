import React from 'react';

const CartItem = () => {
    return (
        <div className='cartItems'>
            <div className="item">
                <div className="detailsCol">
                <div className="imgCol">
                    <img src="/images/fashion.jpg" alt="" />
                </div>
                <div className="details">
                    <h4>Item Name</h4>
                    <div className="addButtons">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>
                </div>
                <div className="quantityCol">
                    <h4>Price $00</h4>

                    <div className="checkin">
                        <button className='checkout'>checkout</button>
                        <button className='remove'>remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;