import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import cartImage from './assets/cart.svg';
import groceries from './assets/groceries.jpeg';
import coffee from './assets/coffee.webp';
import bread from './assets/bread.png';
import nb from './assets/nb.webp';
import utensil from './assets/utensil.avif';
import calltoACTION from './assets/0f713b80-61bb-470b-9a24-14186ee72afc_0.jpeg';

const Home = () => {
    return (
        <>
            <header>
                <nav>
                    <div className='left'>
                        <img src={cartImage}></img>
                        <h4>Bizarre Bazaar</h4>
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
            <div className='up1'>
                <div className='first'>
                    <h1>Bizarre Bazaar</h1>
                    <p>All Essentials in 5-minutes</p>
                    <button>
                        <a href="/">Shop Now</a>
                    </button>
                </div>
            </div>
            <div className='second'>
                <div className='secLeft'>

                    <h1>Welcome to Bizarre Bazaar</h1>
                    <p>At the Bazaar, we believe that shopping should be simple, convenient, and enjoyable. We are your one-stop destination for all your everyday needs – from fresh groceries to essential stationery, and everything in between.

                        Our mission is to provide high-quality products at affordable prices, ensuring that every visit to our store is a pleasant experience. Whether you're looking for daily essentials or special items, we’ve got you covered with a wide range of products tailored to suit your lifestyle.

                        Customer satisfaction is at the heart of everything we do. We strive to create a warm, welcoming atmosphere where you can easily browse and find exactly what you need.

                        Thank you for choosing Bizarre Bazaar – where convenience meets care!
                    </p>

                </div>
                <div className='secRight'>
                    <img src={groceries}></img>
                </div>
            </div>
            <div className='third'>
                <div className='thirdTOP'>
                    <h1>Featured Products</h1>
                </div>
                <div className='Products'>
                    <ul>
                        <li>
                            <img src={coffee}></img>
                        </li>
                        <li>
                            <img src={bread}></img>
                        </li>
                        <li>
                            <img src={nb}></img>
                        </li>
                        <li>
                            <img src={utensil}></img>
                        </li>

                    </ul>
                </div>
            </div>
            <div className='fourth'>
                <h1>Testimonials</h1>
                <div className='content'>
                    <ul>
                        <li>
                            <h3>Emily Thompson</h3>
                            <p>I absolutely love shopping here! The selection is fantastic, and I always find exactly what I need. The shopping experience is smooth, and the checkout process is a breeze. Highly recommend to anyone looking for quality products and excellent service!</p>
                        </li>
                        <li>
                            <h3>Rahul Patel</h3>
                            <p>This shop is my go-to for everything from groceries to stationery. The prices are reasonable, and the variety is unmatched. I especially appreciate the friendly customer service and the fast delivery. Truly a one-stop solution!s</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='fifth'>
                <h1>SHOP NOW AND GET A 10% DISCOUNT!</h1>
                <a href='/'>Shop</a>
            </div>
            <div className='footer'>
                <p>&copy; 2025 Your Store. All rights reserved.</p>
            </div>
        </>
    );
};

export default Home;