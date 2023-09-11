import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function Solution() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    loop: true,
    breakpoints: {
      "(min-width: 625px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1023px)": {
        slides: { perView: 3, spacing: 40 },
      },
      "(min-width: 1203px)": {
        slides: { perView: 4, spacing: 40 },
      },
    },
    slides: { perView: 1, spacing: 10 },
  });

  return (
    <section className="container">
      <div className="solutions-sec">
        <h2>Solutions</h2>

        <div ref={sliderRef} className="solutions-sec__wrapper keen-slider">
          {/* loop 6 times the component */}
          {[1, 2, 3, 4, 5, 6].map((_, idx) => (
            <div key={idx} className="solutions-sec__wrapper__slide keen-slider__slide">
              <div className="card">
                <div className="card__thumbnail">
                  <Image
                    src={"/assets/graphs.svg"}
                    alt={"graph icon"}
                    width={32}
                    height={42}
                  />
                </div>
                <div className="card__content">
                  <h3>Practice Management System</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati soluta magnam aliquid corrupti illo quas error
                    voluptatibus nisi alias accusamus.
                  </p>

                  <Link href={"#"}>Read more &gt;</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
      </div>
    </section>
  );
}

export default Solution;
