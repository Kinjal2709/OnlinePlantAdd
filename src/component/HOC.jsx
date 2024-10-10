import React from 'react'
import Header from './Header'
import Button from './Button'

function HOC(Component) {
    function Newcomponent() {
        return (
            <>
                <Header />
                <Component />

            </>
        )
    }
    return (
        Newcomponent
    )
}

export default HOC