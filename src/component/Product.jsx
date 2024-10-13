import React, { useEffect, useState } from 'react';
import Button from './Button';
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import HOC from './HOC';
import { MainURL } from '../App';
import axios from 'axios';

function Product() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const auth = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    };

    useEffect(() => {
        getProductList();
    }, []);

    const getProductList = () => {
        axios.get(`${MainURL}/product/get`, auth).then((res) => {
            console.log(res.data);
            setData(res.data.data);
        }).catch(function (error) {
            console.log(error.message);
            alert(error.message);
        });
    };

    const deleteProduct = (id) => {
        axios.delete(`${MainURL}/product/delete?id=${id}`, auth).then((res) => {
            console.log(res.data);
            getProductList();
        }).catch(function (error) {
            console.log(error.message);
            alert(error.message);
        });
    };

    const addtocartProduct = (id) => {
        axios.post(`${MainURL}/addtocart/add`, { "productId": id }, auth).then((res) => {
            console.log(res.data);
            navigate('/cartPage');
        }).catch(function (error) {
            console.log(error.message);
            alert(error.message);
        });
    };

    return (
        <>
            <div className="container my-4">
                <div className="text-center mb-3">
                    <Link to="/productformPage">
                        <Button text="ADD PRODUCT" icon={<FaPlus />} />
                    </Link>
                </div>
                <div className="row">
                    {data.length > 0 && data.map((productData) => (
                        <div key={productData._id} className="col-md-4 mb-4">
                            <div className="card border border-black shadow-sm h-100">
                                <img
                                    src={productData.productImage}
                                    alt="Product"
                                    className="card-img-top img-fluid"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h4 className="card-title">{productData.productName}</h4>
                                    <p className="card-text"><strong>Price:</strong> ${productData.price}</p>
                                    <p className="card-text"><strong>Category:</strong> {productData.category}</p>
                                    <p className="card-text"><strong>Shop Name:</strong> {productData.shopName}</p>
                                    <p className="card-text"><strong>Mobile:</strong> {productData.mobile}</p>
                                    <p className="card-text"><strong>Discount:</strong> {productData.discount}%</p>
                                    <p className="card-text"><strong>Description:</strong> {productData.discription}</p>
                                    <p className="card-text"><strong>Colors:</strong> {productData.colors}</p>
                                    <div className="mt-auto d-flex">
                                        <button className="btn btn-danger me-2 text-uppercase" onClick={() => deleteProduct(productData._id)}>Delete</button>
                                        <button className="btn btn-dark me-2 text-white text-uppercase" onClick={() => navigate("/productformPage", { state: { productData } })}>Edit</button>
                                        <button className="btn btn-success text-uppercase" onClick={() => addtocartProduct(productData._id)}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default HOC(Product);
