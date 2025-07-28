import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ name, image, post, message }) => {
  return (
    <>
      <div className="testimonial-card">
        <div className="test-cardbox">
          <div className="cardeachtest">
            <div className="testimonial-avatar">
              <img src={image} className="avatar-img" />
            </div>
            <div className="testimonial-info">
              <h3 className="testimonial-name">{name}</h3>
              <p className="testimonial-role">{post}</p>
            </div>
          </div>
          <i className="doublequote fa-solid fa-quote-left" />
        </div>
        <p className="testimonial-quote">"{message}"</p>
      </div>
    </>
  );
};

export default TestimonialCard;
