import React, { useEffect } from 'react';
import useDatas from '../Hooks/useDatas';
import ReviewsDetailss from './ReviewsDetailss';

const Reviewss = () => {
    const [reviews, setReviews] = useDatas();
    // console.log(reviews);

    return (
        <section>
             <div className="review-details">
             {
                    reviews.map( (review) => <ReviewsDetailss
                        key = {review.id}
                        reviews = {review}
                    ></ReviewsDetailss> )
                }
             </div>
        </section>
    );
};

export default Reviewss;