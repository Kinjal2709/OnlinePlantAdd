import React, { useEffect, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/action/actions';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Header = React.memo(() => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const cartCount = useSelector(state => state.cart.cartCount);

    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem("userData")));
    }, []);

    const handleLogout = useCallback(() => {
        localStorage.removeItem('token');
        dispatch(logout());
        navigate('/');
    }, [dispatch, navigate]);

    return (
        <Navbar bg="dark" expand="lg" className="border-bottom py-2">
            <div className="container-fluid">
                {/* Left section: Logo */}
                <Navbar.Brand href="#" className="d-flex flex-column text-light">
                    <img src={require('../Assets/Images/logo.PNG')} alt="LOGO"
                        className="img-fluid rounded-2"
                        style={{ width: '60px', height: '60px' }} />
                </Navbar.Brand>

                {/* Toggler for mobile view */}
                <Navbar.Toggle aria-controls="navbar-nav" style={{backgroundColor:'white'}} />

                {/* Center section: Navigation links */}
                <Navbar.Collapse id="navbar-nav" className="justify-content-center">
                    <Nav className="d-flex align-items-center">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className={`mx-2 ${location.pathname === "/" ? "fw-bold text-light active" : "text-white"}`}
                        >
                            HOME
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/productPage"
                            className={`mx-2 ${location.pathname === "/productPage" ? "fw-bold text-light active" : "text-white"}`}
                        >
                            PRODUCT
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/cartPage"
                            className={`mx-2 ${location.pathname === "/cartPage" ? "fw-bold text-light active" : "text-white"}`}
                        >
                            CART
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/orderPage"
                            className={`mx-2 ${location.pathname === "/orderPage" ? "fw-bold text-light active" : "text-white"}`}
                        >
                            ORDER
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/orderCompletePage"
                            className={`mx-2 ${location.pathname === "/orderCompletePage" ? "fw-bold text-light active" : "text-white"}`}
                        >
                            ORDER-COMPLETED
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/profilePage"
                            className={`mx-2 ${location.pathname === "/profilePage" ? "fw-bold text-light active" : "text-white"}`}
                        >
                            PROFILE
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                {/* Right section: Profile, Cart, Logout */}
                <div className="d-flex align-items-center">
                    {/* Profile Image */}
                    <Nav.Link href="#" className="d-flex align-items-center me-3">
                        <img
                            src={userData?.userImage}
                            alt="Profile"
                            className="rounded-circle img-fluid"
                            style={{ width: "40px", height: "40px" }}
                        />
                        <span className="ms-2 text-light">{userData?.userName}</span>
                    </Nav.Link>

                    {/* Shopping Cart Icon */}
                    <Nav.Link as={Link} to="/cartPage" className="d-flex align-items-center me-3 text-light position-relative">
                        <FaShoppingCart className="fs-3" />
                        <sup className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartCount}</sup>
                    </Nav.Link>

                    {/* Logout Button */}
                    <Button onClick={handleLogout} variant="outline-light" className="ms-3">
                        Logout
                    </Button>
                </div>
            </div>
        </Navbar>
    );
});

export default Header;
