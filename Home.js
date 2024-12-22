import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        setProducts([
            { "id": 1, "name": "Cocacola", "price": 29.99, "image": "/images/Coca.jpg" },
            { "id": 2, "name": "Watch", "price": 49.99,  "image": "/images/Watch.jpg" },
            { "id": 3, "name": "Coffee", "price": 19.99, "image": "/images/coffee.jpg" },
            { "id": 4, "name": "cream ", "price": 39.99, "image": "/images/cream.jpg" },
            { "id": 5, "name": "cream1 ", "price": 59.99, "image": "/images/cream1.jpg" },
            { "id": 6, "name": "lipstick", "price": 24.99,"image": "/images/lipstick.jpg" },
            { "id": 7, "name": "milk ", "price": 109.99, "image": "/images/milk.jpg" },
            { "id": 8, "name": "oats ", "price": 79.99, "image": "/images/oats.jpg" },
            { "id": 9, "name": "maggie ", "price": 15.99,"image": "/images/maggie.jpg" },
            { "id": 10, "name": " whitwtone", "price": 89.99,"image": "/images/whitwtone.jpg" },
            { "id": 11, "name": "lakme", "price": 89.99, "image": "/images/lakme.jpg" },
            { "id": 12, "name": "powder", "price": 99.99, "image": "/images/powder.jpg" },
            { "id": 13, "name": "Pasta", "price": 54.99, "image": "/images/pasta.jpg" },
            { "id": 15, "name": "Makup", "price": 99.99, "image": "/images/makecup.jpg" },
            { "id": 16, "name": "Salt", "price": 54.99, "image": "/images/salt.jpg" },
        ]);
    }, []);

    return (
        <div>
            <h2>Products</h2>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <Link to={`/product/${product.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Home;