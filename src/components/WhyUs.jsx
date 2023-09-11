import React, { useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const WhyUs = () => {
  const [currentSlide, setCurrentSlide] = useState(3);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    slides: { perView: 1, spacing: 10 },
  });

  return (
    <section className="container whyus-sec">
      <hr />
      <h2>
        Why cutomers love <strong>working with us</strong>
      </h2>

      <div ref={sliderRef} className="whyus-sec__wrapper keen-slider">
        {[1, 2, 3, 4, 5].map((_, idx) => (
          <div
            key={idx}
            className="whyus-sec__wrapper__item keen-slider__slide"
          >
            <div className="quote">
              <Image
                src={"/assets/quote-open.svg"}
                alt="quote"
                width={20}
                height={20}
              />
              <p>
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </p>
              <Image
                src={"/assets/quote-close.svg"}
                alt="quote"
                width={20}
                height={20}
              />
            </div>
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
      <div className="whyus-sec__bottom">
        <div
          onClick={() => {
            setCurrentSlide(1);
          }}
          className={`whyus-sec__bottom__card ${
            currentSlide === 1 && "active"
          }`}
        >
          <div className="whyus-sec__bottom__card__img">
            <Image src={"/assets/customer-1.png"} alt="whyus1" fill />
          </div>
          <Image
            src={"/assets/stars.png"}
            alt="stars"
            className="stars"
            width={120}
            height={20}
          />
          <p>Romeena De Silva</p>
        </div>
        <div
          onClick={() => {
            setCurrentSlide(2);
          }}
          className={`whyus-sec__bottom__card ${
            currentSlide === 2 && "active"
          }`}
        >
          <div className="whyus-sec__bottom__card__img">
            <Image src={"/assets/customer-2.png"} alt="whyus1" fill />
          </div>
          <Image
            src={"/assets/stars.png"}
            alt="stars"
            className="stars"
            width={120}
            height={20}
          />
          <p>Romeena De Silva</p>
        </div>
        <div
          onClick={() => {
            setCurrentSlide(3);
          }}
          className={`whyus-sec__bottom__card ${
            currentSlide === 3 && "active"
          }`}
        >
          <div className="whyus-sec__bottom__card__img">
            <Image src={"/assets/customer-3.png"} alt="whyus1" fill />
          </div>
          <Image
            src={"/assets/stars.png"}
            alt="stars"
            className="stars"
            width={120}
            height={20}
          />
          <p>Romeena De Silva</p>
        </div>
        <div
          onClick={() => {
            setCurrentSlide(4);
          }}
          className={`whyus-sec__bottom__card ${
            currentSlide === 4 && "active"
          }`}
        >
          <div className="whyus-sec__bottom__card__img">
            <Image src={"/assets/customer-4.png"} alt="whyus1" fill />
          </div>
          <Image
            src={"/assets/stars.png"}
            alt="stars"
            className="stars"
            width={120}
            height={20}
          />
          <p>Romeena De Silva</p>
        </div>
        <div
          onClick={() => {
            setCurrentSlide(5);
          }}
          className={`whyus-sec__bottom__card ${
            currentSlide === 5 && "active"
          }`}
        >
          <div className="whyus-sec__bottom__card__img">
            <Image src={"/assets/customer-5.png"} alt="whyus1" fill />
          </div>
          <Image
            src={"/assets/stars.png"}
            alt="stars"
            className="stars"
            width={120}
            height={20}
          />
          <p>Romeena De Silva</p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <div className="keen_btns" onClick={props.onClick}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
      >
        <path
          d="M0.937491 6.56248H12.0562L8.65312 2.47498C8.49399 2.28353 8.41743 2.0367 8.44029 1.78881C8.46314 1.54091 8.58354 1.31224 8.77499 1.15311C8.96644 0.993979 9.21327 0.917421 9.46117 0.940277C9.70907 0.963133 9.93774 1.08353 10.0969 1.27498L14.7844 6.89998C14.8159 6.94473 14.8441 6.99173 14.8687 7.04061C14.8687 7.08748 14.8687 7.11561 14.9344 7.16248C14.9769 7.26998 14.9991 7.3844 15 7.49998C14.9991 7.61557 14.9769 7.72999 14.9344 7.83748C14.9344 7.88436 14.9344 7.91248 14.8687 7.95936C14.8441 8.00824 14.8159 8.05524 14.7844 8.09998L10.0969 13.725C10.0087 13.8308 9.89834 13.9159 9.77357 13.9742C9.64881 14.0326 9.51272 14.0627 9.37499 14.0625C9.15594 14.0629 8.94366 13.9866 8.77499 13.8469C8.68006 13.7682 8.60159 13.6715 8.54407 13.5624C8.48656 13.4533 8.45112 13.334 8.4398 13.2112C8.42848 13.0884 8.44149 12.9646 8.4781 12.8468C8.5147 12.7291 8.57418 12.6197 8.65312 12.525L12.0562 8.43748H0.937491C0.688851 8.43748 0.450394 8.33871 0.274578 8.1629C0.0987625 7.98708 -8.58307e-06 7.74862 -8.58307e-06 7.49998C-8.58307e-06 7.25134 0.0987625 7.01289 0.274578 6.83707C0.450394 6.66126 0.688851 6.56248 0.937491 6.56248Z"
          fill="#2C706C"
        />
      </svg>
    </div>
  );
}
