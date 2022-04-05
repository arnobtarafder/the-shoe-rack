import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ReviewDetails.css';
import { Avatar } from '@material-ui/core';
// import useReviews from '../../Hooks/useReviews';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
      </div>
    );
  };

const ReviewsDetails = () => {
    // const {name, description, id, img} = reviews;
    return (
        <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1 className='text-2xl mb-8' style={{ marginBottom: 20 }}>OUR HONORABLE CUSTOMERS REVIEWS</h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <ReviewsCard 
          img="https://scontent.fdac5-1.fna.fbcdn.net/v/t31.18172-8/22384087_10154819682976891_5369315647445272063_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFt2YOCkujJV8WA3dVAoOy_1njAXCuRU5nWeMBcK5FTmeTkNlpSlIEiH3v8IYUttbGcPakLx81dPxFcMfU4Ct_b&_nc_ohc=I3MZxXXOp14AX-ixhBk&_nc_ht=scontent.fdac5-1.fna&oh=00_AT9DgAmCW45BHlHrzlZYyMAGRY6ylwrf4ij26rR6TXR36w&oe=627068EA" 
          name = "Jhankar Mahbub" 
          description = "I will highly recommend this shop. their's products are well and their service is mind blowing. This is not a paid review."
          designation="Sr. Web Developer" />
          
          <ReviewsCard 
          img="https://freepikpsd.com/file/2019/10/avatar-icon-png-5-Images-PNG-Transparent.png"
          name="Arnob Tarafder" 
          description = "Get the outstanding service. the shoes are really so much well and good. you will also get many offers with the products that will blow your mind."
          designation = "Junior Programmer"  />
          
          <ReviewsCard 
          img="https://www.oneindia.com/politicians/image/302x100x402x1/ratan-lal-nath-20970.jpg"
          name="Roton Lal"
          description="Hello! I am roton. I want to say that you should come here and boil your money to buy the products. it will get you peace. that's why you should get me full marks. thanks" 
          designation="Minister" />
        </Slider>
      </div>
    </div>
    );
};

const ReviewsCard = ({img, reviews, name, description, designation}) => {
    // const {reviews, setReviews} = useReviews()
    // console.log(reviews);
    // const {name, description, id} = reviews;
    return (
        <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "gray",
        }}
      >
        <Avatar
          imgProps={{ style: { borderRadius: "50%" } }}
          src={img}
          style={{
            width: 120,
            height: 120,
            border: "1px solid lightgray",
            padding: 7,
            marginBottom: 20,
          }}
        />
        <p style={{width: "70%"}}>
          {description}
        </p>
        <p style={{ fontStyle: "italic", marginTop: 25 }}>
          <span style={{ fontWeight: 500, color: "green" }}>{name}</span>, {designation}
        </p>


        <Link to='/reviews'><button className='mt-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>All Reviews</button></Link><br />
      </div>
    )
}

export default ReviewsDetails;