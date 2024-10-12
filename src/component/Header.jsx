import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
    // Get the current location (pathname)
    const location = useLocation();

    return (
        <Navbar bg="dark" expand="lg" className="border-bottom py-2">
            <div className="container-fluid">
                {/* Left section: Logo */}
                <Navbar.Brand href="#" className="d-flex flex-column text-light">
                <img src={require('../Assets/Images/logo.PNG')} alt="LOG0"
                className="img-fluid rounded-2" 
                style={{width:'60px' , height:'60px'}}/>
                </Navbar.Brand>

                {/* Toggler for mobile view */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Center section: Navigation links */}
                <Navbar.Collapse id="navbar-nav" className="justify-content-center">
                    <Nav className="d-flex align-items-center">
                        <Nav.Link
                            as={Link}
                            to="/homepage"
                            className={`mx-2 ${location.pathname === "/homepage" ? "fw-bold text-light active" : "text-white"}`}
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
                            src="https://via.placeholder.com/40"
                            alt="Profile"
                            className="rounded-circle"
                            style={{ width: "40px", height: "40px" }}
                        />
                        <span className="ms-2 text-light">Name</span>
                    </Nav.Link>

                    {/* Shopping Cart Icon */}
                    <Nav.Link href="#" className="d-flex align-items-center me-3 text-light">
                        <FaShoppingCart className="fs-3" />
                    </Nav.Link>

                    {/* Logout Button */}
                    <Button variant="outline-light" className="ms-3">
                        Logout
                    </Button>
                </div>
            </div>
        </Navbar>
    );
};

export default Header;
