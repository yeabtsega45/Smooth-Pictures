import Image from "next/image";
import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "opacity-[1] ease-in duration-1000"
                : "opacity-0"
            }
          >
            <FaArrowCircleLeft
              onClick={prevSlide}
              className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
              size={50}
            />
            {index === current && (
              <Image
                src={slide.image}
                alt="/"
                width="1440"
                height="600"
                objectFit="cover"
              />
            )}
            <FaArrowCircleRight
              onClick={nextSlide}
              className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
              size={50}
            />
          </div>
        );
      })}
    </>
  );
};

export default Slider;
