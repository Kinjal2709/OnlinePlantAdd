import React from 'react';

function Button(props) {
    return (
        <div className="text-center mt-5">
            <button className="btn gradient-btn">
                <span className="text-white">{props.text}</span> {/* Use props.text here */}
            </button>
        </div>
    );
}

export default Button;
