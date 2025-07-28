import React from "react";
import "./Blogsection.css";
import testone from "../../../assets/testimonial/testone.webp";
import testfour from "../../../assets/testimonial/testfour.jpg";
import testfive from "../../../assets/testimonial/testfive.jpg";

const Blogsection = () => {
  return (
    <>
      <div className="blogsection">
        <p className="testimonialtitle">Blog & Wedding Gyaan</p>
        <p className="testimonialdetails">
          Shaadi ki tayari kaise karein? Tips, guides aur rituals ka poora
          gyaan.
        </p>
        <div className="blogsectionblogmain">
          <div className="eachblogsection">
            <div className="eachblogimageouter">
              <img className="blogsection_eachimage" src={testone} />
            </div>
            <p>Banaras ki top venues</p>
          </div>
          
          <div className="eachblogsection">
            <div className="eachblogimageouter">
              <img className="blogsection_eachimage" src={testfour} />
            </div>
            <p>Shaadi ka budget kaise banayein</p>
          </div>

          <div className="eachblogsection">
            <div className="eachblogimageouter">
              <img className="blogsection_eachimage" src={testfive} />
            </div>
            <p>Vivah ke shubh muhurat 2025</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogsection;
