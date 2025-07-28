import React from "react";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'


import "./Themes.css";
import culturefirst from "../../../assets/cultureimages/culturefirst.png";
import culturetwo from "../../../assets/cultureimages/culturetwo.jpg";
import culturethree from "../../../assets/cultureimages/culturethree.jpg";

const THemes = () => {
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
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const themesdata = [
    {
      id:1,
      title: "Royal Mithila Theme",
      details: "Madhubani, lotus, Maithili rituals",
      images: culturefirst,
    },
    {
      id:2,
      title: "Kashi Spiritual Theme",
      details: "Banarasi saree, brass décor, ghats",
      images: culturethree,
    },
    {
      id:3,
      title: "Bhojpuri Folk Fusion",
      details: "Village mandaps, dhol nagara",
      images: culturetwo,
    },
    {
      id:4,
      title: "Royal Mithila Theme",
      details: "Madhubani, lotus, Maithili rituals",
      images: culturefirst,
    },
    {
      id:5,
      title: "Kashi Spiritual Theme",
      details: "Banarasi saree, brass décor, ghats",
      images: culturethree,
    },
    {
      id:6,
      title: "Bhojpuri Folk Fusion",
      details: "Village mandaps, dhol nagara",
      images: culturetwo,
    },
  ];

  return (
    <>
    <div className="themesouter">
      <div className="themes">
        <p className="venuesectiontitle secondtitle">
          Explore Themes Bihar aur Banaras ke Rang Mein
        </p>
        <p className="venuesectiondesc">
          Apke sheher ki parampara, ek naye andaaz mein.
        </p>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {themesdata.map((item) => {
              return (
                <div key={item.id} className="embla__slide emblaforcolor">
                  <div className="embla_slide_imagebox">
                    <img className="venuesectionimage" src={item.images} />
                  </div>
                  <div className="crousel-slide-content">
                    <p className="venuesection_name">{item.title}</p>
                    <p className="venuesection_somedetails forbottom">
                      {item.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <div className="embla__buttons">
          <PrevButton className="prevgo letsgo" onClick={onPrevButtonClick} disabled={prevBtnDisabled} ><i className="fa-light fa-arrow-left"/></PrevButton>
          <NextButton className="nextgo letsgo" onClick={onNextButtonClick} disabled={nextBtnDisabled} ><i className="fa-light fa-arrow-right"/></NextButton>
      </div>

    </div>
    </>
  );
};

export default THemes;
