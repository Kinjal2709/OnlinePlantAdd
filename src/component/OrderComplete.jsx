import React, { useEffect, useState } from 'react';
import HOC from './HOC';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MainURL } from '../App';
import '../Assets/css/ExtrnalCss.css';

function OrderComplete() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const auth = {  
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    };

    useEffect(() => {
        getOrderList();
    }, []);

    const getOrderList = () => {
        axios.get(`${MainURL}/orderCompleted/get`, auth).then((res) => {
            console.log(res.data);
            setData(res.data.data);
        }).catch(function (error) {
            console.log(error.message);
            alert(error.message);
        });
    };

    return (
        <div className="container mt-4">
            <div className="mt-3 d-flex flex-column align-items-center">
            <h2 className='border-4 border-bottom border-danger text-center mb-4'>COMPLETED ORDERS</h2>
            </div>
            {data.length > 0 ? (
                <div className="order-complete-list">
                    {data.map((productData, index) => (
                        <div key={index} className="order-complete-item">
                            {productData.productImage && (
                                <img
                                    src={productData.productImage}
                                    alt="Product"
                                    className="order-complete-image img-fluid"
                                />
                            )}
                            <div className="order-complete-details">
                                <h5 className="order-complete-title">{productData.productName}</h5>
                                <p><strong>Price:</strong> ${productData.price}</p>
                                <p><strong>Category:</strong> {productData.category}</p>
                                <p><strong>Shop:</strong> {productData.shopName}</p>
                                <p><strong>Contact:</strong> {productData.mobile}</p>
                                <p><strong>Discount:</strong> {productData.discount}%</p>
                                <p><strong>Description:</strong> {productData.discription}</p>
                                <p><strong>Colors:</strong> {productData.colors}</p>
                                <div className="order-complete-summary">
                                    <span>Quantity: {productData.quantity}</span>
                                    <span>Total: ${productData.totalPrice}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center">No completed orders found.</p>
            )}
        </div>
    );
}

export default HOC(OrderComplete);
