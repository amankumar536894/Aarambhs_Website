import React from "react";
import "./TestimonialCrousel.css";
import TestimonialCard from "./TestimonialCard";
import firstpeople from "../../../assets/testimonial/testpeople.webp";
import secondpeople from "../../../assets/testimonial/testpeopletwo.webp";

const peopledata = [
  {
    image: firstpeople,
    name: "Amit Kumar",
    post: "Software Engineer",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis pharetra tortor, non eleifend nisi. In hac habis`,
  },
  {
    image: secondpeople,
    name: "Nisha Yadav",
    post: "Graphics Designer",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis pharetra tortor, non eleifend nisi. In hac habis`,
  },
  {
    image: firstpeople,
    name: "Amit Kumar",
    post: "Software Engineer",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis pharetra tortor, non eleifend nisi. In hac habis`,
  },
  {
    image: secondpeople,
    name: "Nisha Yadav",
    post: "Graphics Designer",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis pharetra tortor, non eleifend nisi. In hac habis`,
  },
  {
    image: firstpeople,
    name: "Amit Kumar",
    post: "Software Engineer",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis pharetra tortor, non eleifend nisi. In hac habis`,
  },
  {
    image: secondpeople,
    name: "Nisha Yadav",
    post: "Graphics Designer",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis pharetra tortor, non eleifend nisi. In hac habis`,
  },
  {
    image: firstpeople,
    name: "Amit Kumar",
    post: "Software Engineer",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis pharetra tortor, non eleifend nisi. In hac habis`,
  },
  {
    image: secondpeople,
    name: "Nisha Yadav",
    post: "Graphics Designer",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis pharetra tortor, non eleifend nisi. In hac habis`,
  },
];

const TestimonialCrousel = () => {
  return (
    <>
      <div className="testimonialcrousel">
        <p className="venuepageabouttitle">What People think about Us</p>
        <p className="venuepageaboutdesc">Testimonials</p>

        <div className="testimonialcrouselsection">
          

          <div className="eachcrouselsectiongo">
            <div className=" eachcrouselsectiongo-inner crouseleft ">
              {peopledata.map(
                (testimonial, index) => (
                  <TestimonialCard
                    key={`carousel1-${index}`}
                    {...testimonial}
                  />
                )
              )}
            </div>
          </div>

          
          <div className="eachcrouselsectiongo">
            <div className=" eachcrouselsectiongo-inner crouseright">
              {peopledata.map(
                (testimonial, index) => (
                  <TestimonialCard
                    key={`carousel2-${index}`}
                    {...testimonial}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCrousel;
