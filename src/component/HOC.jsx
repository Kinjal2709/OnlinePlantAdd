import React from 'react';
import Header from './Header';

function HOC(Component) {
    return function NewComponent(props) {
        return (
            <>
                <Header />
                <Component {...props} />
            </>
        );
    };
}

export default HOC;
