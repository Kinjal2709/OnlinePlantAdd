import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormLogin />} />
          <Route path="/SignUp" element={<FormSignUp />} />
        </Routes>

        <Routes>
          <Route path="/homepage" element={<Home />} />
          <Route path="/productPage" element={<Product />} />
          <Route path="/productformPage" element={<ProductForm />} />
          <Route path="/cartPage" element={<Cart />} />
          <Route path="/orderPage" element={<Order />} />
          <Route path="/orderCompletePage" element={<OrderComplete />} />
          <Route path="/profilePage" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
