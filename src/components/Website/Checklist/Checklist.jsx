import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Checklist.css";
import weddingvenue from "../../../assets/checklistimages/weddingvenue.jpg";
import weddingphotographer from "../../../assets/checklistimages/weddingphotographer.jpg";
import bridalmakeup from "../../../assets/checklistimages/bridalmakeup.jpg";
import bridalmehandi from "../../../assets/checklistimages/bridalmehandi.jpg";
import weddingplanner from "../../../assets/checklistimages/weddingplanner.jpg";
import weddingvenuevideo from "../../../assets/checklistimages/weddingvenuevideotwo.webm";
import weddingshootvideo from "../../../assets/checklistimages/weddingshootvideo.webm";
import bridalvideo from "../../../assets/checklistimages/bridalvideo.webm";
import mehandivideo from "../../../assets/checklistimages/mehandivideo.webm";
import weddingplannervideo from "../../../assets/checklistimages/weddingplannervideo.webm";

const Checklist = () => {
  const checklistdetails = [
    {
      id: "01",
      category: "Wedding Venues",
      image: weddingvenue,
      video: weddingvenuevideo,
    },
    {
      id: "02",
      category: "Wedding Photographer",
      image: weddingphotographer,
      video: weddingshootvideo,
    },
    {
      id: "03",
      category: "Bridal Makeup",
      image: bridalmakeup,
      video: bridalvideo,
    },
    {
      id: "04",
      category: "Bridal Mehandi",
      image: bridalmehandi,
      video: mehandivideo,
    },
    {
      id: "05",
      category: "Wedding Planner",
      image: weddingplanner,
      video: weddingplannervideo,
    },
  ];

  return (
    <>
      <div className="checklist">
        <p className="checklisttitle">Plan your Wedding</p>
        <p className="checklistdesc">
          Riwaazon se lekar reception tak hum aapke saath.
        </p>

        <Swiper
          className=" forhomeswiper"
          loop={true}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            700: {
              slidesPerView: 1.1
            },
            1100:{
                slidesPerView: 2.5
            }
          }}
        >
          {checklistdetails.map((item) => {
            return (
              <SwiperSlide>
                <div className="swiperboxeach">
                  <div className="oneavenuedetails">
                    <p className="serialnumber">{item.id}</p>
                    <p className="serialvenuename">{item.category}</p>
                  </div>
                  <div className="oneavenuedetails">
                    <video autoPlay muted loop className="onevenuevideo" src={item.video} />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="getchecklistbtn">
          <div className="fornone"></div>
          <p>Get Your Free Wedding Checklist</p>
          <div className="custom-swiper-buttons">
            <div className="swiper-button-prev-custom">←</div>
            <div className="swiper-button-next-custom">→</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checklist;
