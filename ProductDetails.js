import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import the cart context
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const allProducts = [
            { "id": 1, "name": "Cocacola", "price": 29.99, "image": "/images/Coca.jpg" },
            { "id": 2, "name": "Watch", "price": 49.99, "image": "/images/Watch.jpg" },
            { "id": 3, "name": "Coffee", "price": 19.99, "image": "/images/coffee.jpg" },
            { "id": 4, "name": "cream ", "price": 39.99, "image": "/images/cream.jpg" },
            { "id": 5, "name": "cream1 ", "price": 59.99, "image": "/images/cream1.jpg" },
            { "id": 6, "name": "lipstick", "price": 24.99, "image": "/images/lipstick.jpg" },
            { "id": 7, "name": "milk ", "price": 109.99, "image": "/images/milk.jpg" },
            { "id": 8, "name": "oats ", "price": 79.99, "image": "/images/oats.jpg" },
            { "id": 9, "name": "maggie ", "price": 15.99, "image": "/images/maggie.jpg" },
            { "id": 10, "name": " whitwtone", "price": 89.99, "image": "/images/whitwtone.jpg" },
            { "id": 11, "name": "lakme", "price": 89.99, "image": "/images/lakme.jpg" },
            { "id": 12, "name": "powder", "price": 99.99, "image": "/images/powder.jpg" },
            { "id": 13, "name": "Pasta", "price": 54.99, "image": "/images/pasta.jpg" },
            { "id": 15, "name": "Makup", "price": 99.99, "image": "/images/makecup.jpg" },
            { "id": 16, "name": "Salt", "price": 54.99, "image": "/images/salt.jpg" },
        ];
        const selectedProduct = allProducts.find((p) => p.id === parseInt(id));
        setProduct(selectedProduct);
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    const handleAddToCart = () => {
        addToCart(product); // Add the product to the cart
        navigate('/cart');
    };

    return (
        <div className="product-details">
            <h2 className="product-title">{product.name}</h2>
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="product-price">Price: ${product.price}</p>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductDetails;
