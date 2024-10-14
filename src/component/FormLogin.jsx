import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/action/actions';
import { MainURL } from '../App';

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const validateForm = () => {
        const newErrors = { email: '', password: '' };
        let isValid = true;

        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            newErrors.email = 'Email is required.';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Please enter a valid email address.';
            isValid = false;
        }

        if (!password) {
            newErrors.password = 'Password is required.';
            isValid = false;
        } else if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            axios.post(`${MainURL}/user/login`, {
                email: email,
                password: password
            })
                .then(function (response) {
                    console.log(response);
                    localStorage.setItem("token" , response.data.token)
                    // dispatch(login(response.data.token));
                    // navigate('/homePage')

                    axios.get(`${MainURL}/user/getUser`,{
                        headers: {
                            'Authorization': `Bearer ${response.data.token}`,
                            'Accept': 'application/json',
                        }
                    })
                        .then(function (response1) {
                            console.log(response1.data.data);
                            localStorage.setItem("userData" , JSON.stringify(response1.data.data))
                            dispatch(login(response.data.token));
                        })
                        .catch(function (error) {
                            console.log(error.message);
                            alert(error.message);
                        });

                })
                .catch(function (error) {
                    console.log(error.message);
                    alert(error.message);
                });
        }
    };

    return (
        <div 
            style={{
                backgroundImage: `url(${require('../Assets/Images/signIn_page.jpg')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                boxShadow: 'rgba(0, 0, 0, 0.9)',
                position: 'relative',
                overflow: 'hidden',
            }}>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="w-100 shadow p-5 mb-5 rounded-3" style={{ maxWidth: '400px', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                    <h2 className="mb-3 text-center text-primary">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mb-2" style={{ borderRadius: '30px', padding: '10px 20px' }}>
                            Login
                        </button>
                        <div className='text-center'>
                            <p className="mt-3">
                                Don’t Have an Account? <a href="/SignUp" className="text-primary fw-bold">Sign up</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormLogin;
