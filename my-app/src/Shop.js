import React, { useState } from 'react';
import './Shop.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import cartImage from './assets/cart.svg';
import emailjs from '@emailjs/browser';

import stationeryImg from './assets/nb.webp';
import apple from './assets/apple.webp';
import banana from './assets/banana.webp';
import bread from './assets/bread.png';
import brocoli from './assets/brocoli.webp';
import cheese from './assets/cheese.webp';
import coffee from './assets/coffee.webp';
import cookies from './assets/cookies.webp';
import eggs from './assets/eggs.webp';
import flour from './assets/flour.webp';
import glue from './assets/glue.webp';
import icecream from './assets/icecream.png';
import lettuce from './assets/lettuce.png';
import milk from './assets/milk.png';
import nb from './assets/nb.webp';
import oil from './assets/oil.webp';
import onions from './assets/onions.webp';
import pasta from './assets/pasta.png';
import pen from './assets/pen.webp';
import sugar from './assets/sugar.webp';
import utensil from './assets/utensil.avif';

const Shop = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    // Function to add a product to the cart
    const addToCart = (product) => {
        const productExists = cart.find(item => item.id === product.id);
        if (productExists) {
            const updatedCart = cart.map(item =>
                item.id === product.id ? { ...item, qty: item.qty + 1 } : item
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
        }
    };

    // Function to increment the quantity of a product in the cart
    const incrementQty = (product) => {
        const updatedCart = cart.map(item =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
        setCart(updatedCart);
    };

    // Function to remove a product from the cart
    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };

    // Calculate total price
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.qty, 0);
    };

    const handleOrderPlacement = () => {
        if (cart.length === 0) {
          window.alert('Your cart is empty! Please add items to the cart before placing an order.');
          return;
        }
      
        const orderDetails = cart.map(item => `${item.name} (Qty: ${item.qty})`).join(', ');
        const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
      
        // Prepare EmailJS parameters
        const emailParams = {
          order_details: orderDetails,
          total_price: totalPrice.toFixed(2),
        };
      
        emailjs
          .send('service_tzff5qa', 'template_69vhnwr', emailParams, 'D0DJlRxj_EMacbbLd')
          .then(() => {
            window.alert('Order placed successfully! Confirmation sent to the shop.');
            navigate('/');
          })
          .catch(err => {
            console.error('Failed to send email:', err);
            window.alert('Failed to place order. Please try again.');
          });
      };

    // Example products data
    // Define products constant
    const products = [
        { id: 1, name: 'Utensil', img: utensil, description: 'Durable kitchen utensils', price: 20 },
        { id: 2, name: 'Stationery', img: stationeryImg, description: 'All your stationery needs.', price: 15 },
        { id: 3, name: 'Apple', img: apple, description: 'Fresh, juicy apples.', price: 3 },
        { id: 4, name: 'Banana', img: banana, description: 'Ripe and sweet bananas.', price: 2 },
        { id: 5, name: 'Bread', img: bread, description: 'Soft and fresh bread.', price: 4 },
        { id: 6, name: 'Broccoli', img: brocoli, description: 'Fresh green broccoli.', price: 5 },
        { id: 7, name: 'Cheese', img: cheese, description: 'Premium quality cheese.', price: 6 },
        { id: 8, name: 'Coffee', img: coffee, description: 'Rich, aromatic coffee.', price: 10 },
        { id: 9, name: 'Cookies', img: cookies, description: 'Delicious cookies.', price: 7 },
        { id: 10, name: 'Eggs', img: eggs, description: 'Fresh farm eggs.', price: 3 },
        { id: 11, name: 'Flour', img: flour, description: 'High-quality flour.', price: 4 },
        { id: 12, name: 'Glue', img: glue, description: 'Strong and durable glue.', price: 2 },
        { id: 13, name: 'Ice Cream', img: icecream, description: 'Creamy, delicious ice cream.', price: 8 },
        { id: 14, name: 'Lettuce', img: lettuce, description: 'Crisp and fresh lettuce.', price: 3 },
        { id: 15, name: 'Milk', img: milk, description: 'Fresh, wholesome milk.', price: 5 },
        { id: 16, name: 'Notebook', img: nb, description: 'Handy A5 notebook.', price: 8 },
        { id: 17, name: 'Cooking Oil', img: oil, description: 'Premium cooking oil.', price: 10 },
        { id: 18, name: 'Onions', img: onions, description: 'Fresh, aromatic onions.', price: 3 },
        { id: 19, name: 'Pasta', img: pasta, description: 'High-quality pasta.', price: 7 },
        { id: 20, name: 'Pen', img: pen, description: 'Smooth writing pen.', price: 2 },
        { id: 21, name: 'Sugar', img: sugar, description: 'Pure white sugar.', price: 4 },
    ];



    return (
        <>
            <header>
                <nav>
                    <div className='left'>
                        <img src={cartImage}></img>
                        <h4>Bizarre Bazaar - Shopping Cart</h4>
                    </div>

                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="/feedback">Feedback</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="shop-container">
                {/* Products Grid */}
                <div className="products-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-item">
                            <img src={product.img} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <div className="product-actions">
                                <span>${product.price}</span>
                                <button onClick={() => addToCart(product)}>Buy</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cart Section */}
                <div className="cart">
                    <h2>Cart</h2>
                    {cart.length === 0 ? (
                        <p>No items in the cart.</p>
                    ) : (
                        <>
                            {cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <h4>{item.name}</h4>
                                    <p>${item.price} x {item.qty}</p>
                                    <button onClick={() => incrementQty(item)}>+</button>
                                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            ))}
                            {/* Display Total Price */}
                            <h3>Total: ${calculateTotalPrice()}</h3>
                        </>
                    )}
                    {cart.length > 0 && (
                        <button onClick={handleOrderPlacement} className="buy-now">
                            Buy Now
                        </button>
                    )}
                </div>
            </div>
            <div className='footer'>
                <p>&copy; 2025 Your Store. All rights reserved.</p>
            </div>
        </>
    );
};

export default Shop;