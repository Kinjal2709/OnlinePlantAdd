import React, { useState } from 'react';

const ProductForm = () => {
    const [formData, setFormData] = useState({
        productName: '',
        price: '',
        category: '',
        shopName: '',
        mobile: '',
        discount: '',
        description: '',
        colors: '',
        productImage: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to backend)
        console.log(formData);
    };

    return (
        <div
            className="container-fluid py-5 vh-100 d-flex align-items-center justify-content-center"
            style={{
                backgroundImage: `url(${require('../Assets/Images/productForm_bg.jpeg')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: 'inset 0px 0px 1000px 1500px rgba(0, 0, 0, 0.8)'
            }}

        >
            <form onSubmit={handleSubmit} className="bg-light  bg-opacity-75 p-5 rounded">
                <h2 className="text-center mb-4">Product Form</h2>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Product Name</label>
                        <input
                            type="text"
                            name="productName"
                            className="form-control bg-transparent border"
                            value={formData.productName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Price</label>
                        <input
                            type="number"
                            name="price"
                            className="form-control bg-transparent border"
                            value={formData.price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Category</label>
                        <input
                            type="text"
                            name="category"
                            className="form-control bg-transparent border"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Shop Name</label>
                        <input
                            type="text"
                            name="shopName"
                            className="form-control bg-transparent border"
                            value={formData.shopName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Mobile</label>
                        <input
                            type="tel"
                            name="mobile"
                            className="form-control bg-transparent border"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Discount</label>
                        <input
                            type="number"
                            name="discount"
                            className="form-control bg-transparent border"
                            value={formData.discount}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        name="description"
                        className="form-control bg-transparent border"
                        value={formData.description}
                        onChange={handleChange}
                        rows="1"
                        required
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Colors</label>
                    <input
                        type="text"
                        name="colors"
                        className="form-control bg-transparent border"
                        value={formData.colors}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="mb-3">
                    <label className="form-label">Product Image</label>
                    <input
                        type="file"
                        name="productImage"
                        className="form-control bg-transparent border"
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ProductForm;
