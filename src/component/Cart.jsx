import React, { useEffect, useState } from 'react';
import HOC from './HOC';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MainURL } from '../App';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setInitialCartCount } from '../redux/action/actions';
import '../Assets/css/ExtrnalCss.css';

function Cart() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const auth = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }

    useEffect(() => {
        getCartList();
    }, []);

    const getCartList = () => {
        axios.get(`${MainURL}/addtocart/get`, auth).then((res) => {
            setData(res.data.data);
            dispatch(setInitialCartCount(res?.data?.data.length ? res.data.data.length : 0));
        }).catch(function (error) {
            console.log(error.message);
            alert(error.message);
        });
    }

    const removeFromCart = (id) => {
        axios.delete(`${MainURL}/addtocart/remove?productId=${id}`, auth).then((res) => {
            getCartList();
        }).catch(function (error) {
            console.log(error.message);
            alert(error.message);
        });
    }

    const handleOrder = (product) => {
        setSelectedProduct(product);
        setQuantity(1);
        setShowModal(true);
    }

    const confirmOrder = () => {
        axios.post(`${MainURL}/order/add`, {
            "productId": selectedProduct._id,
            "quantity": quantity
        }, auth).then((res) => {
            removeFromCart(selectedProduct._id);
            setShowModal(false);
            navigate('/orderPage');
        }).catch(function (error) {
            console.log(error.message);
            alert(error.message);
        });
    }

    const handleQuantityChange = (e) => {
        const newQuantity = e.target.value;
        if (newQuantity < 1) {
            setQuantity(1);
        } else {
            setQuantity(newQuantity);
        }
    }

    return (
        <div className="container mt-3 d-flex flex-column align-items-center">
            <h2 className='border-4 border-bottom border-danger text-center mb-4'>CART</h2>
            {data.length > 0 ? (
                data.map((productData, index) => (
                    <div key={index} className="card m-3 border border-dark shadow-sm" style={{ width: '90%', maxWidth: '600px' }}>
                        <div className="card-body d-flex align-items-center">
                            {productData.productImage && (
                                <img
                                    src={productData.productImage}
                                    alt="Product"
                                    className="img-fluid me-3"
                                    style={{ maxHeight: '150px', width: '150px', objectFit: 'cover' }}
                                />
                            )}
                            <div className="flex-grow-1">
                                <h4 className="card-title">{productData.productName}</h4>
                                <p className="card-text"><strong>Price:</strong> ${productData.price}</p>
                                <p className="card-text"><strong>Category:</strong> {productData.category}</p>
                                <p className="card-text"><strong>Shop Name:</strong> {productData.shopName}</p>
                                <p className="card-text"><strong>Discount:</strong> {productData.discount}%</p>
                                <div className="d-flex">
                                    <button className="btn btn-danger me-2" onClick={() => removeFromCart(productData._id)}>Remove</button>
                                    <button className="btn btn-dark" onClick={() => handleOrder(productData)}>Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <h4>Your cart is empty.</h4>
            )}

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedProduct && (
                        <>
                            <div className="d-flex align-items-center">
                                {selectedProduct.productImage && (
                                    <img
                                        src={selectedProduct.productImage}
                                        alt="Product"
                                        className="img-fluid"
                                        style={{ maxHeight: '150px', width: '150px', objectFit: 'cover', marginRight: '15px' }}
                                    />
                                )}
                                <div>
                                    <h4>{selectedProduct.productName}</h4>
                                    <p>Price: ${selectedProduct.price}</p>
                                    <p>Category: {selectedProduct.category}</p>
                                    <p>Shop Name: {selectedProduct.shopName}</p>
                                    <p>Discount: {selectedProduct.discount}%</p>
                                    <p>Description: {selectedProduct.discription}</p>
                                    <p>Colors: {selectedProduct.colors}</p>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="quantity">Quantity:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="quantity"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    min="1"
                                />
                            </div>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    <Button variant="primary" onClick={confirmOrder}>Order Done</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default HOC(Cart);
