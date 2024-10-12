import React from 'react'
import HOC from './HOC'

function OrderComplete() {
    return (
        <div className="container mt-3 d-flex justify-content-center align-items-center">
            <h2 className='border-4 border-bottom border-danger'>ORDER-COMPLETE</h2>
        </div>
    )
}

export default HOC(OrderComplete)