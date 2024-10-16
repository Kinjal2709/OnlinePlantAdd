import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import FormLogin from './component/FormLogin';
import FormSignUp from './component/FormSignUp';
import ProductForm from './component/ProductForm';
import Home from './component/Home';
import Cart from './component/Cart';
import Order from './component/Order';
import OrderComplete from './component/OrderComplete';
import Profile from './component/Profile';
import Product from './component/Product';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './redux/action/actions';
import { useNavigate } from 'react-router-dom';

export const MainURL = "http://localhost:7000/api";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector(state => state.auth.token);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      dispatch(login(storedToken));
    }
  }, [dispatch]);

  useEffect(() => {
    console.log("CHANGE DESTINATION")
    if (!token && location.pathname !== '/SignUp' &&                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                location.pathname !== '/') {
      navigate('/');
    }
  }, [token, navigate, location]);

  return (
    <Routes>
      {
        !token ? (
          <>
            <Route path="/" element={<FormLogin />} />
            <Route path="/SignUp" element={<FormSignUp />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/productPage" element={<Product />} />
            <Route path="/productformPage" element={<ProductForm setProductData={setProductData} />} />
            <Route path="/cartPage" element={<Cart />} />
            <Route path="/orderPage" element={<Order />} />
            <Route path="/orderCompletePage" element={<OrderComplete />} />
            <Route path="/profilePage" element={<Profile />} />
          </>
        )
      }
    </Routes>
  );
}

export default App;
