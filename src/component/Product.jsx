import React from 'react';
import Button from './Button';
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HOC from './HOC';

function Product() {
    return (
        <>
        <div className="container d-flex justify-content-center align-items-center">
            <Link to={"/productformPage"}> <Button text="ADD PRODUCT" icon={<FaPlus />} /></Link>
        </div>
        </>

    );
}

export default HOC(Product);
