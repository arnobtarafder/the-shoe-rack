import React from 'react';
import Swiper from 'swiper';
import useReviews from '../../Hooks/useReviews';
import './ReviewDetails.css'


const ReviewsDetails = (props) => {
    const [reviews, setReviews] = useReviews();
    const {name, id, description, img} = props.reviews; 
   
    const swiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        autoHeight: false,
        centeredSlides:true,
        slidesPerView: 1,
      // Responsive breakpoints
      breakpoints: {
            640: {
          slidesPerView:2,
                  spaceBetween: 40,
        },
        992: {
          slidesPerView: 3,
                  spaceBetween: 40,
        }
      },
    
        // If we need pagination
        pagination: {
            el: ".swiper-pagination"
        },
    
        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    
        // And if we need scrollbar
        /*scrollbar: {
        el: '.swiper-scrollbar',
      },*/
    });
    
    return (
        <section className='w-full'>
         <div class="wrapper">
	 <header><h1>TESTIMONIALS</h1></header>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
                <div className="testimonialBox">
                    <img src={img} alt="" />
                    <div className="content">
                        <p>{description}</p>
                        <div className="details">
                            <div className="imgBx">
                                <img src={img} alt="" />
                            </div>
                            <h3>Someone Famous <br /> <span>Creative Designer</span></h3>
                        </div>
                    </div>
                </div>
            </div>
			
		</div>

        {/* <div class="content-wrapper">
            <div class="content">
                <div class="swiper-avatar"><img src="https://bikes-n-stuff.com/wp-content/uploads/sb-instagram-feed-images/julietelliott.jpg" /></div>
                <p>{description}</p>
                <p class="cite">- {name}, Cyclist</p>
            </div>
            </div> */}
		{/* <div class="swiper-nav-wrapper">
			<div class="swiper-button-prev"></div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button-next"></div>
		</div> */}
	</div>
</div>
    </section>
    
    );
};

export default ReviewsDetails;