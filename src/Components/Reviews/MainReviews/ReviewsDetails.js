import React from 'react';
import Rating from 'react-rating';
import {ImStarEmpty, ImStarFull} from 'react-icons/im';
import './ReviewsDetailsStyle.css'

const ReviewsDetails = ({review}) => {
    const {name, image, rate, message} = review;
    return (
        <div className='review-details-container'>
            <div className=''>
                <img src={image} alt="" />
            </div>
            <div className='review-details'>
                <p>
                    <strong className='' style={{}}><u className='font-sans font-bold no-underline text-teal-600'>Customer:</u> <span className=' font-thin'>{name}</span></strong>
                </p>
                <p className='py-2'><strong className='my-3'><u className='font-sans font-bold no-underline text-teal-600'>Review:</u> </strong><span className='font-thin'>{message}</span></p>
                <p>
                    <strong className=''><u className='font-sans font-bold no-underline text-teal-600'>Rating:</u> <span className='font-thin'>{rate}</span> </strong>
                    <Rating style={{fontSize: '1rem', marginLeft: '5px'}} initialRating={rate} emptySymbol={<ImStarEmpty style={{ color: '#fdde6c' }} />} 
                    fullSymbol={<ImStarFull style={{ color: '#fdde6c' }} />} readonly>
                    </Rating>
                </p>
            </div>
        </div>
    );
};

export default ReviewsDetails;