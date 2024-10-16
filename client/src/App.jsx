
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { useSelector } from 'react-redux';
import Checkout from './pages/Checkout';
import PlaceOrder from "./pages/PlaceOrder";
import OrderConfirmation from "./pages/OrderConfirm";
import { OrderHistory } from "./pages/OrderHistory";
import PrivacyPolicy from './pages/PrivacyPolicy';
function App() {
  const userLoginReducer = useSelector((state)=> state.userLoginReducer)
  const {userInfo} = userLoginReducer
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products/:id" element={<ProductDetail />} />
          <Route exact path="/login" element={userInfo ? <Navigate to="/"></Navigate> : <Login />} />
          <Route exact path="/register" element={userInfo ? <Navigate to="/"></Navigate> : <Register />} />
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/placeorder" element={<PlaceOrder />}></Route>
          <Route path="/order/:id" element={<OrderConfirmation />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
