import React from "react";
import profile from "@/public/Medu.jpeg";
import Image from "next/image";

export default function About() {
  return (
    <div
      id="about"
      className="h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-12"
    >
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 md:p-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center text-gray-800">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src={profile}
            alt="Profile"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg mb-6 md:mb-0 md:mr-8"
          />
          <div>
            <p className="text-gray-600 mb-4">
              Hello! I am a passionate photographer with a love for capturing
              moments that tell a story. My journey started when I picked up my
              first camera at the age of 15, and I have been hooked ever since.
              Over the years, I have honed my skills and developed a unique
              style that blends creativity with technical precision.
            </p>
            <p className="text-gray-600 mb-4">
              My work spans various genres, including portrait, landscape, and
              event photography. I strive to create images that not only look
              beautiful but also evoke emotion and connect with the viewer on a
              deeper level.
            </p>
            <p className="text-gray-600 mb-4">
              Whether it is a candid moment or a carefully composed shot, I aim
              to capture the essence of the subject and the beauty of the world
              around us. When I am not behind the lens, you can find me
              continuously learning to perfect my craft.
            </p>
            <p className="text-gray-600">
              Thank you for visiting my site, and I look forward to sharing my
              passion for photography with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
