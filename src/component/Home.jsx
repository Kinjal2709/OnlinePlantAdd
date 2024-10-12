import React from 'react';
import HOC from './HOC';

const Home = () => {
    return (
        <div
            className=''
            style={{
                backgroundImage: `url(${require('../Assets/Images/home.webp')})`,
                backgroundSize: 'cover',
                minHeight: '90vh',
                boxShadow: 'rgba(0, 0, 0, 0.9)',
                position: 'relative',
                overflow: 'hidden',
            }}>
            <div className="text-center mt-5 pt-3">
                <h1
                    style={{
                        fontWeight: "700",
                        color: "#000",
                        textTransform: "uppercase",
                        letterSpacing: "3px",
                        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                        position: "relative",
                        paddingBottom: "10px"
                    }}
                >
                    Make Your Home Good Nutrition
                    
                </h1>
            </div>

        </div>
    );
};

export default HOC(Home);
