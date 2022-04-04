import React, { useEffect } from 'react';
import useReviews from '../Hooks/useReviews';
import ReviewsDetails, { ReviewsCard } from './ReviewsDetails/ReviewsDetails';

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
                  {/* {
                    reviews.slice(0,3).map( (review) => <ReviewsCard
                        key = {review.id}
                        reviews = {review}
                    ></ReviewsCard> )
                } */}
             </div>
        </section>
    );
};

export default Reviews;