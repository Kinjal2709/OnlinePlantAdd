import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainURL } from '../App';

const FormSignUp = () => {
    const [formData, setFormData] = useState({
        userName: "",
        mobile: "",
        email: "",
        gender: "",
        password: "",
        confirmPassword: "",
        qualification: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
        address: "",
        officeContact: "",
        birthDate: "",
        userImage: null
    });
    const navigate = useNavigate()

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.userName) newErrors.userName = "Username is required.";
        if (!formData.mobile) newErrors.mobile = "Mobile number is required.";
        if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile number must be 10 digits.";
        if (!formData.email) newErrors.email = "Email is required.";
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
        if (!formData.gender) newErrors.gender = "Gender is required.";
        if (!formData.password) newErrors.password = "Password is required.";
        if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters.";
        if (formData.confirmPassword !== formData.password) newErrors.confirmPassword = "Passwords do not match.";
        if (!formData.qualification) newErrors.qualification = "Qualification is required.";
        if (!formData.city) newErrors.city = "City is required.";
        if (!formData.state) newErrors.state = "State is required.";
        if (!formData.country) newErrors.country = "Country is required.";
        if (!formData.postalCode) newErrors.postalCode = "Postal code is required.";
        if (!/^\d{6}$/.test(formData.postalCode)) newErrors.postalCode = "Postal code must be 6 digits.";
        if (!formData.address) newErrors.address = "Address is required.";
        if (!formData.officeContact) newErrors.officeContact = "Office contact is required.";
        if (!/^\d{10}$/.test(formData.officeContact)) newErrors.officeContact = "Office contact number must be 10 digits.";
        if (!formData.birthDate) newErrors.birthDate = "Birth date is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(formData);
            const formdataApi = new FormData()
            formdataApi.append("userName", formData.userName)
            formdataApi.append("email", formData.email)
            formdataApi.append("mobile", formData.mobile)
            formdataApi.append("gender", formData.gender)
            formdataApi.append("birthDate", formData.birthDate)
            formdataApi.append("city", formData.city)
            formdataApi.append("state", formData.state)
            formdataApi.append("country", formData.country)
            formdataApi.append("postalCode", formData.postalCode)
            formdataApi.append("officeContact", formData.officeContact)
            formdataApi.append("qualification", formData.qualification)
            formdataApi.append("address", formData.address)
            formdataApi.append("password", formData.password)
            formdataApi.append("confirmPassword", formData.confirmPassword)
            formdataApi.append("userImage", formData.userImage)
            axios.post(`${MainURL}/user/register`, formdataApi)
                .then(function (response) {
                    console.log(response);
                    navigate('/')
                })
                .catch(function (error) {
                    console.log(error.message);
                    alert(error.message);
                });
        }
    };

    return (
        <div className="container-fluid vh-100">
            <div className="row h-100">
                {/* Left Section with Background Image and Text */}
                <div className="col-lg-6 d-flex flex-column justify-content-center text-light text-left" id="left-section">
                    <h1 className="display-4">Create An Account</h1>
                    <p>Start Your Journey With Us Today, For Exclusive Benefits And Personalized Experiences.</p>
                </div>

                {/* Right Section with the Sign-Up Form */}
                <div className="col-lg-6 py-4 d-flex align-items-center justify-content-center" id="right-section">
                    <div className="w-75">
                        <h2 className="text-center mb-4">User Registration Form</h2>
                        <form onSubmit={handleSubmit}>

                            {/* Username and Mobile in one row */}
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="userName">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="userName"
                                        name="userName"
                                        placeholder="Username"
                                        value={formData.userName}
                                        onChange={handleChange}
                                    />
                                    {errors.userName && <small className="text-danger">{errors.userName}</small>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="mobile"
                                        name="mobile"
                                        placeholder="Mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                    />
                                    {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
                                </div>
                            </div>

                            {/* Email and Gender in one row */}
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <small className="text-danger">{errors.email}</small>}
                                </div>

                                <div className="col-md-6">
                                    <label>Gender</label><br />
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            id="male"
                                            value="Male"
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor="male">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            id="female"
                                            value="Female"
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor="female">Female</label>
                                    </div>
                                    {errors.gender && <small className="text-danger d-block">{errors.gender}</small>}
                                </div>
                            </div>

                            {/* Password and Confirm Password in one row */}
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    {errors.password && <small className="text-danger">{errors.password}</small>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
                                </div>
                            </div>

                            {/* Qualification and City in one row */}
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="qualification">Qualification</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="qualification"
                                        name="qualification"
                                        placeholder="Qualification"
                                        value={formData.qualification}
                                        onChange={handleChange}
                                    />
                                    {errors.qualification && <small className="text-danger">{errors.qualification}</small>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="city">City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                    {errors.city && <small className="text-danger">{errors.city}</small>}
                                </div>
                            </div>

                            {/* State and Country in one row */}
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="state">State</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="state"
                                        name="state"
                                        placeholder="State"
                                        value={formData.state}
                                        onChange={handleChange}
                                    />
                                    {errors.state && <small className="text-danger">{errors.state}</small>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="country">Country</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="country"
                                        name="country"
                                        placeholder="Country"
                                        value={formData.country}
                                        onChange={handleChange}
                                    />
                                    {errors.country && <small className="text-danger">{errors.country}</small>}
                                </div>
                            </div>

                            {/* Postal Code and Address in one row */}
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="postalCode">Postal Code</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="postalCode"
                                        name="postalCode"
                                        placeholder="Postal Code"
                                        value={formData.postalCode}
                                        onChange={handleChange}
                                    />
                                    {errors.postalCode && <small className="text-danger">{errors.postalCode}</small>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="address">Address</label>
                                    <textarea
                                        className="form-control"
                                        id="address"
                                        name="address"
                                        placeholder="Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                    {errors.address && <small className="text-danger">{errors.address}</small>}
                                </div>
                            </div>

                            {/* Office Contact and Birth Date in one row */}
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="officeContact">Office Contact</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="officeContact"
                                        name="officeContact"
                                        placeholder="Office Contact"
                                        value={formData.officeContact}
                                        onChange={handleChange}
                                    />
                                    {errors.officeContact && <small className="text-danger">{errors.officeContact}</small>}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="birthDate">Birth Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="birthDate"
                                        name="birthDate"
                                        value={formData.birthDate}
                                        onChange={handleChange}
                                    />
                                    {errors.birthDate && <small className="text-danger">{errors.birthDate}</small>}
                                </div>
                            </div>

                            {/* User Image in its own row */}
                            <div className="form-group mb-3">
                                <label htmlFor="userImage">Profile Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="userImage"
                                    name="userImage"
                                    onChange={handleChange}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary w-100">Sign Up</button>

                            <div className='text-end mt-3'>
                                <p>Already have an Account? <a href="/">Log in</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormSignUp;
