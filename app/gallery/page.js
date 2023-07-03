"use client";

import Image from "next/image";
import React from "react";
import { SliderData } from "../components/SliderData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Gallery({ slides }) {
  return (
    <div className="max-w-[1240px] mx-auto bg-black/70 h-screen pt-14">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      <div className="relative flex justify-center p-4">
        <Carousel>
          {SliderData.map((slide, index) => {
            return (
              <div key={index}>
                <Image
                  src={slide.image}
                  alt="/"
                  width="1440"
                  height="600"
                  objectFit="cover"
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
