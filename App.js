import './App.css';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
    return (
        <CartProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        </CartProvider>
    );
}

export default App;
