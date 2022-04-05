import React, { useEffect } from 'react';
import useReviews from '../Hooks/useReviews';
import ReviewsDetails, { ReviewsCard } from './ReviewsDetails/ReviewsDetails';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    // console.log(reviews);

    return (
        <section>
             <div className="review-details">
             {
                    reviews.map( (review) => <ReviewsDetails
                        key = {review.id}
                        reviews = {review}
                    ></ReviewsDetails> )
                }
             </div>
        </section>
    );
};

export default Reviews;