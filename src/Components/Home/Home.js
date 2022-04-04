import React from 'react';
import Reviews from '../Reviews/Reviews';
// import ReviewsDetails from '../Reviews/ReviewsDetails/ReviewsDetails';
import './Home.css'

const Home = () => {
    return (
        <section>
            <div className='homepage-container justify-end mt-24 md:order-2'>
            <div className="details-container mx-auto">
                <h1>Earn Money</h1>
                <h1>Buy Shoes</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore est ipsa qui ab iure voluptates voluptate, veritatis fugit ratione delectus voluptatibus. Nesciunt, porro! Totam eaque accusamus rem ullam nulla. Nulla fugit adipisci eligendi quas expedita sed ullam quasi eius aperiam molestiae, odio dolorem aspernatur officiis voluptatem necessitatibus. Tempora repellat repellendus ipsa et iste quas esse, quis voluptatem excepturi corrupti, consequatur quibusdam sit facere libero, earum recusandae labore architecto quos exercitationem?</p>
            </div>

            <div className="image-container mx-auto md:order-1 mb-56">
                <img className='' src="https://media.istockphoto.com/photos/object-patternsneakers-picture-id1304862992?b=1&k=20&m=1304862992&s=170667a&w=0&h=Emf1s0oY7xw7HjOCloT7XHLXlkdznJ9Tve-l9FZWBBA=" alt="" />
            </div>


        </div>
        <Reviews></Reviews>
        </section>
    );
};

export default Home;