import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";
import "./Venue.css";
import varanasiimage from "../../../assets/venuesimages/varanasiimage.jpg";
import mumbai from "../../../assets/venuesimages/mumbai.jpg";
import delhi from "../../../assets/venuesimages/delhi.jpg";
import aagra from "../../../assets/venuesimages/aagra.jpg";
import jaipur from "../../../assets/venuesimages/jaipur.jpg";

// Helper functions for the scale effect (from Embla Carousel scale example)
const TWEEN_FACTOR_BASE = 0.25; // You can adjust this value to control the scale effect

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const Venue = () => {
  const embladata = [
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

  const autoplayOptions = {
    delay: 3000, // 3000 milliseconds = 3 seconds
    stopOnInteraction: false, // Keep autoplaying even if user interacts (e.g., drags)
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToView: 3 },
    [Autoplay(autoplayOptions)]
  );

  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__inner"); // <-- Target the inner wrapper
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        if (tweenNode) {
          // Ensure tweenNode exists before trying to access its style
          tweenNode.style.transform = `scale(${scale})`;
        }
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, setTweenNodes, setTweenFactor, tweenScale]); // Added dependencies

  return (
    <>
      <div className="venuesection">
        <p className="venuesectiontitle">Choose Your Venue</p>
        <p className="venuesectiondesc">
          Sheher chunein, venue dekhein, shaadi ki jagah pakki karein
        </p>

        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {embladata.map((item, index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__inner">
                    {" "}
                    {/* <-- Add this wrapper */}
                    <img
                      className="venuesectionimage"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="crousel-slide-content forupdown">
                      <p className="venuesection_name">{item.name}</p>
                      <p className="venuesection_location">{item.location}</p>
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
                  </div>{" "}
                  {/* <-- Close the wrapper */}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="viewallvenus">View All Venues</p>
      </div>
    </>
  );
};

export default Venue;
