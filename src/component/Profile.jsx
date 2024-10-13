import React, { useEffect, useState } from 'react';
import HOC from './HOC';
import '../Assets/css/ExtrnalCss.css';

function Profile() {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("userData"));
        if (data) {
            setUserData(data);
        }
    }, []);

    return (
        <div className="profile-container">
            <h2 className="profile-title">User Profile</h2>

            {userData.userImage && (
                <div className="profile-image-container">
                    <img
                        src={userData.userImage}
                        alt="User"
                        className="profile-image img-fluid"
                    />
                </div>
            )}

            <div className="profile-info">
                <div className="info-column">
                    <p><strong>Name:</strong> {userData.userName}</p>
                    <p><strong>Mobile:</strong> {userData.mobile}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Gender:</strong> {userData.gender}</p>
                </div>
                <div className="info-column">
                    <p><strong>Qualification:</strong> {userData.qualification}</p>
                    <p><strong>Birth Date:</strong> {new Date(userData.birthDate).toLocaleDateString()}</p>
                    <p><strong>City:</strong> {userData.city}</p>
                    <p><strong>State:</strong> {userData.state}</p>
                </div>
                <div className="info-column">
                    <p><strong>Country:</strong> {userData.country}</p>
                    <p><strong>Postal Code:</strong> {userData.postalCode}</p>
                    <p><strong>Address:</strong> {userData.address}</p>
                    <p><strong>Office Contact:</strong> {userData.officeContact}</p>
                </div>
            </div>
        </div>
    );
}

export default HOC(Profile);
