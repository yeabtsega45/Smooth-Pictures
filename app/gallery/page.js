"use client";

import React from "react";
import { SliderData } from "../components/SliderData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "../components/Slider";

export default function Gallery({ slides }) {
  return (
    <div id="gallery" className="z-[2] h-screen pt-14">
      <h1 className="text-3xl font-bold text-center p-4 mt-3">Gallery</h1>
      <div className="relative flex justify-center items-center m-auto p-4 w-[450px] md:w-[650px]">
        <Slider slides={SliderData} />
      </div>
    </div>
  );
}
