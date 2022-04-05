import useReview from '../../Hooks/useReview';
import ReviewsDetails from './ReviewsDetails';
import './ReviewsStyle.css';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='review-container'>
            <h2 className='text-5xl'>What our customers say!</h2>
        <div className='reviews'>
            {
                reviews.map(review => (
                    <ReviewsDetails
                    key={review.id} review={review}></ReviewsDetails>
                ))
            }
        </div>
        </div>
    );
};

export default Reviews;