import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HOC from './HOC';
import { MainURL } from '../App';
import axios from 'axios';

const ProductForm = () => {
    const location = useLocation();
    const { productData } = location.state || {};
  
    const [formData, setFormData] = useState({
      productName: '',
      price: '',
      category: '',
      shopName: '',
      mobile: '',
      discount: '',
      discription: '',
      colors: '',
      productImage: null,
      _id: undefined,
    });
  
    useEffect(() => {
      if (productData) {
        setFormData(productData); // Update form with product data if available
      }
    }, [productData]);

    const navigate = useNavigate();  // For navigation

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const auth={
        headers:{
            Authorization:
            `Bearer ${localStorage.getItem("token")} `
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formdataNew=new FormData();
        formdataNew.append("productName",formData.productName)
        formdataNew.append("price",formData.price)
        formdataNew.append("category",formData.category)
        formdataNew.append("shopName",formData.shopName)
        formdataNew.append("mobile",formData.mobile)
        formdataNew.append("discount",formData.discount)
        formdataNew.append("discription",formData.discription)
        formdataNew.append("colors",formData.colors)
        formdataNew.append("productImage",formData.productImage)
        if(!formData._id){
            axios.post(`${MainURL}/product/add`,formdataNew,auth).then((res)=>{
                console.log(res.data);
                navigate('/productPage'); 
            }).catch(function (error) {
                console.log(error.message);
                alert(error.message);
            });
           }else{
            axios.patch(`${MainURL}/product/update?id=${formData._id}`,formdataNew,auth).then((res)=>{
                console.log(res.data);
                navigate('/productPage'); 
            }).catch(function (error) {
                console.log(error.message);
                alert(error.message);
            });
        }
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
            <form onSubmit={handleSubmit} className="bg-light bg-opacity-75 p-3 rounded">
                <h2 className="text-center mb-2">Product Form</h2>

                <div className="row mb-1">
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

                <div className="row mb-1">
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

                <div className="row mb-1">
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

                <div className="mb-1">
                    <label className="form-label">Description</label>
                    <textarea
                        name="discription"
                        className="form-control bg-transparent border"
                        value={formData.discription}
                        onChange={handleChange}
                        rows="1"
                        required
                    ></textarea>
                </div>

                <div className="mb-1">
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

                <div className="mb-1">
                    <label className="form-label">Product Image</label>
                    <input
                        type="file"
                        name="productImage"
                        className="form-control bg-transparent border"
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-3 w-100">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default HOC(ProductForm);
