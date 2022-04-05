import React from 'react';
import { Link } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
// import ReviewsDetails from '../Reviews/ReviewsDetails/ReviewsDetails';
import './Home.css'

const Home = () => {
    return (
        <section className='px-4 py-16 mx-auto max-w-7xl'>
            <div className='grid w-full grid-cols-1 mx-auto md:w-4/5 lg:grid-cols-2 lg:justify-start'>
            <div className="details-container justify-center text-left lg:pt-16">

                <h1 className='text-5xl font-thin'><span className='text-teal-600'>Earn</span> Money</h1>

                <h1 className='text-5xl font-thin'><span className='text-orange-900'>Buy</span> Shoes</h1>
                <p className='font-momo text-medium mt-7 text-left'>This shop is the world's largest shop. You can found here any kind of shoes you want. Our service level deserves more than 5 star. Just taste us one time. I will make sure that you will never buy shoes from any other shop other than us.</p>

                <Link to='/reviews'><button className=' mt-4 mb-11 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Reviews</button></Link>
            </div>

            <div className="image-container md:mt-11 justify-center mx-auto md:order-1 mb-36">
                <img className='rounded-lg' src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80" alt="" />
            </div>


        </div>
        <Reviews></Reviews>
        </section>
    );
};

export default Home;