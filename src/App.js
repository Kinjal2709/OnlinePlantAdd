import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FormLogin from './component/FormLogin';
import FormSignUp from './component/FormSignUp';
import HOC from './component/HOC';
import Header from "./component/Header"; // Adjust the path according to your project structure
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Button from './component/Button';
import ProductForm from './component/ProductForm';
import Home from './component/Home';
import Cart from './component/Cart';
import Order from './component/Order';
import OrderComplete from './component/OrderComplete';
import Profile from './component/Profile';

function App() {
  return (
    <>

      <Header />
      {/* <HOC /> */}
      {/* <h1>hello</h1> */}
      {/* <FormLogin/> */}
      {/* <FormSignUp /> */}
      {/* <ProductForm /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FormLogin />}></Route>
          <Route path='/SignUp' element={<FormSignUp />}></Route>
          <Route path='/homepage' element={<Home />}></Route>
          <Route path='/productPage' element={<ProductForm />}></Route>
          <Route path='/cartPage' element={<Cart />}></Route>
          <Route path='/orderPage' element={<Order/>}></Route>
          <Route path='/orderCompletePage' element={<OrderComplete/>}></Route>
          <Route path='/profilePage' element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
