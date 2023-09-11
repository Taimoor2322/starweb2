import Image from "next/image";
import React, { useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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
    breakpoints: {
      "(min-width: 1023px)": {
        slides: { perView: 2, spacing: 30 },
      },
      "(min-width: 1203px)": {
        slides: { perView: 3, spacing: 40 },
      },
    },
    slides: { perView: 1, spacing: 10 },
  });

  return (
    <section className="container">
      <div className="team-sec">
        <h2>Our Team</h2>
        <p>
          &quot;Our dedicated team combines expertise in healthcare and
          technology, working collaboratively to create impactful solutions that
          redefine the future of healthcare delivery.&quot;
        </p>

        <div ref={sliderRef} className="team-sec__wrapper keen-slider">
          {[1, 2, 3, 4, 5, 6].map((_, idx) => (
            <div
              key={idx}
              className="team-sec__wrapper__item keen-slider__slide"
            >
              <div className="team-sec__wrapper__item__head">
                <div className="team-sec__wrapper__item__head__img">
                  <Image
                    src={"/assets/team.png"}
                    alt="team"
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    priority
                  />
                </div>
                <div className="team-sec__wrapper__item__head__content">
                  <h3>Israh</h3>
                  <p>CEO</p>
                </div>
              </div>
              <div className="team-sec__wrapper__item__body">
                <p>xxx</p>
              </div>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}

        <div className="btns-container">
          <button className="btn-secondary view-btn">View All</button>
        </div>
      </div>
    </section>
  );
};

export default Team;

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <div className="keen_btns">
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    </div>
  );
}
