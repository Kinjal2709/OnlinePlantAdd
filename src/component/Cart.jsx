import React from 'react';
import HOC from './HOC';

function Cart() {
    return (
        <div className="container mt-3 d-flex justify-content-center align-items-center">
            <h2 className='border-4 border-bottom border-danger'>CART</h2>
        </div>
    );
}

export default HOC(Cart);
