import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    // State to track the active nav link
    const [activeLink, setActiveLink] = useState("Home");

    // Function to handle active link change
    const handleActiveLink = (linkName) => {
        setActiveLink(linkName);
    };

    return (
        <Navbar bg="dark" expand="lg" className="border-bottom py-2">
            <div className="container-fluid">
                {/* Left section: Logo */}
                <Navbar.Brand href="#" className="d-flex flex-column text-light">
                    <span className="h2 mb-0">Tote</span>
                    <span className="small">Funky Printed Bags</span>
                </Navbar.Brand>

                {/* Toggler for mobile view */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Center section: Navigation links */}
                <Navbar.Collapse id="navbar-nav" className="justify-content-center">
                    <Nav className="d-flex align-items-center">
                        <Nav.Link
                            href="/homepage"
                            className={`mx-2 ${activeLink === "Home" ? "fw-bold text-light" : "text-white"}`}
                            onClick={() => handleActiveLink("Home")}
                        >
                            HOME
                        </Nav.Link>
                        <Nav.Link
                            href="/productPage"
                            className={`mx-2 ${activeLink === "Product" ? "fw-bold text-light" : "text-white"}`}
                            onClick={() => handleActiveLink("Product")}
                        >
                            PRODUCT
                        </Nav.Link>
                        <Nav.Link
                            href="/cartPage"
                            className={`mx-2 ${activeLink === "Cart" ? "fw-bold text-light" : "text-white"}`}
                            onClick={() => handleActiveLink("Cart")}
                        >
                            CART
                        </Nav.Link>
                        <Nav.Link
                            href="/orderPage"
                            className={`mx-2 ${activeLink === "Order" ? "fw-bold text-light" : "text-white"}`}
                            onClick={() => handleActiveLink("Order")}
                        >
                            ORDER
                        </Nav.Link>
                        <Nav.Link
                            href="/orderCompletePage"
                            className={`mx-2 ${activeLink === "OrderCompleted" ? "fw-bold text-light" : "text-white"}`}
                            onClick={() => handleActiveLink("OrderCompleted")}
                        >
                            ORDER-COMPLETED
                        </Nav.Link>
                        <Nav.Link
                            href="/profilePage"
                            className={`mx-2 ${activeLink === "Profile" ? "fw-bold text-light" : "text-white"}`}
                            onClick={() => handleActiveLink("Profile")}
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
