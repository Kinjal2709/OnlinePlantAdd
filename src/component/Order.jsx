import React, { useEffect, useState } from 'react';
import HOC from './HOC';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MainURL } from '../App';
import '../Assets/css/ExtrnalCss.css';

function Order() {
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
        axios.get(`${MainURL}/order/get`, auth).then((res) => {
            console.log(res.data);
            setData(res.data.data);
        }).catch(function (error) {
            console.log(error.message);
            alert(error.message);
        });
    };

    const removeFromOrder = (id) => {
        axios.delete(`${MainURL}/order/remove?productId=${id}`, auth).then((res) => {
            console.log(res.data);
            getOrderList();
        }).catch(function (error) {
            console.log(error.message);
            alert(error.message);
        });
    };

    const orderComplete = (id) => {
        console.log("Completing order for productId:", id);
        axios.post(`${MainURL}/order/makeOrderComplete`, { productId: id }, auth)
            .then((res) => {
                console.log("Order complete response:", res.data);
                navigate('/orderCompletePage');
            })
            .catch((error) => {
                console.error("Error completing order:", error);
            });
    };

    return (
        <div className="container mt-4">
            <div className="mt-3 d-flex flex-column align-items-center">
            <h2 className='border-4 border-bottom border-danger text-center mb-4'>YOUR ORDERS</h2>
            </div>
            {data.length > 0 ? (
                <div className="order-list">
                    {data.map((productData, index) => (
                        <div key={index} className="order-item">
                            {productData.productImage && (
                                <img
                                    src={productData.productImage}
                                    alt="Product"
                                    className="order-image img-fluid"
                                />
                            )}
                            <div className="order-details">
                                <h5 className="order-title">{productData.productName}</h5>
                                <p><strong>Price:</strong> ${productData.price}</p>
                                <p><strong>Category:</strong> {productData.category}</p>
                                <p><strong>Shop:</strong> {productData.shopName}</p>
                                <p><strong>Contact:</strong> {productData.mobile}</p>
                                <p><strong>Discount:</strong> {productData.discount}%</p>
                                <p><strong>Description:</strong> {productData.discription}</p>
                                <p><strong>Colors:</strong> {productData.colors}</p>
                                <div className="order-summary">
                                    <span>Quantity: {productData.quantity}</span>
                                    <span>Total: ${productData.totalPrice}</span>
                                </div>
                                <div className="order-actions">
                                    <button className="btn btn-danger" onClick={() => removeFromOrder(productData._id)}>Remove</button>
                                    <button className="btn btn-primary" onClick={() => orderComplete(productData._id)}>Complete Order</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center">You have no orders yet.</p>
            )}
        </div>
    );
}

export default HOC(Order);
