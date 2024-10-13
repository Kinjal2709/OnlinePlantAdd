import React from 'react';

const ProductDetails = ({ productData }) => {
    if (!productData) {
        return <div>No product data available. Please submit the form first.</div>;
    }

    return (
        <div className="container py-5 d-flex flex-column align-items-center justify-content-center">
    <div className="card custom-card shadow-lg p-4 rounded">
        <h3 className="text-center custom-title">Product Details</h3>
        <div className="card-body">
            {productData.productImage && (
                <img
                    src={URL.createObjectURL(productData.productImage)}
                    alt="Product"
                    className="img-fluid mx-auto d-block custom-image"
                    style={{width :'100px', height:'100px'}}
                />
            )}
            <h4 className="card-title custom-product-name">Product: {productData.productName}</h4>
            <p className="card-text custom-price">Price: ${productData.price}</p>
            <p className="card-text">Category: {productData.category}</p>
            <p className="card-text">Shop Name: {productData.shopName}</p>
            <p className="card-text">Mobile: {productData.mobile}</p>
            <p className="card-text">Discount: {productData.discount}%</p>
            <p className="card-text">Description: {productData.description}</p>
            <p className="card-text">Colors: {productData.colors}</p>
        </div>
    </div>
</div>

    );
};

export default ProductDetails;
