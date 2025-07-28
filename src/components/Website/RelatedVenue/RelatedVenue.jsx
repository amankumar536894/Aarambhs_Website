import React from "react";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '../Themes/EmblaCarouselArrowButtons'


import varanasiimage from "../../../assets/venuesimages/varanasiimage.jpg";
import mumbai from "../../../assets/venuesimages/mumbai.jpg";
import delhi from "../../../assets/venuesimages/delhi.jpg";
import aagra from "../../../assets/venuesimages/aagra.jpg";
import jaipur from "../../../assets/venuesimages/jaipur.jpg";
import '../Venue/Venue.css'
import './RelatedVenue.css'
import '../Themes/Themes.css'

const RelatedVenue = () => {
  const autoplayOptions = {
    delay: 3000, // 3000 milliseconds = 3 seconds
    stopOnInteraction: false, // Keep autoplaying even if user interacts (e.g., drags)
  };

  // FIX: Destructure emblaApi from the hook's return value
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToView: 3 },
    [Autoplay(autoplayOptions)]
  );

  useEffect(() => {
    if (emblaApi) {
      // Now emblaApi will be defined here
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]); // The dependency array is correct as it re-runs when emblaApi becomes available

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

 const relateddata = [
     {
       name: "The Mansion",
       image: delhi,
       location: "Delhi | 1500 for One",
       reviews: "4.9 (2130 reviews)",
     },
     {
       name: "The Green Valley",
       image: aagra,
       location: "Agra | 1500 for One",
       reviews: "4.9 (2130 reviews)",
     },
     {
       name: "The Leela Palace",
       image: jaipur,
       location: "Jaipur | 1500 for One",
       reviews: "4.9 (2130 reviews)",
     },
     {
       name: "Reyansh Banquet",
       image: varanasiimage,
       location: "Banaras | 1500 for One",
       reviews: "4.9 (2130 reviews)",
     },
     {
       name: "Blue Sea Mumbai",
       image: mumbai,
       location: "Mumbai | 1500 for One",
       reviews: "4.9 (2130 reviews)",
     },
   ];

  return (
    <>
      <div className="themesouter">
        <div className="themes">
          <p className="venuesectiontitle secondtitle">
            Related Venues
          </p>
          <p className="venuesectiondesc">
            Apke sheher mein
          </p>

          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {relateddata.map((item) => {
                return (
                  <div key={item.id} className="embla__slide emblaforcolor">
                    <div className="embla_slide_imagebox">
                      <img className="venuesectionimage" src={item.image} />
                    </div>
                    <div className="crousel-slide-content forsectionbottom">
                      <p className="venuesection_name">{item.name}</p>
                      <p className="venuesection_somedetails">
                        {item.location}
                      </p>
                      <div className="venuesection_review">
                        <div className="reviewstars">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                        <p className="reviewnumber">{item.reviews}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="embla__buttons">
          <PrevButton
            className="prevgo letsgo"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          >
            <i className="fa-light fa-arrow-left" />
          </PrevButton>
          <NextButton
            className="nextgo letsgo"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          >
            <i className="fa-light fa-arrow-right" />
          </NextButton>
        </div>
      </div>
    </>
  );
};

export default RelatedVenue;
