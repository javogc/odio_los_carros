import React, { useState } from "react";

type ImageSliderProps = {
  images: string[];
};

export default function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const imagesLength = images.length - 1;

  const nextImage = () => {
    console.log("next image");
    if (imageIndex === imagesLength) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  const previousImage = () => {
    console.log("imageindex previous", imageIndex);
    if (imageIndex === 0) {
      setImageIndex(imagesLength);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center gap-5 bg-odioGreen">
        <div className="relative group flex justify-center">
          <img
            src={require(`../../../../images/${images[imageIndex]}.png`)}
            alt="logo_queretaro"
            className="w-full md:w-3/4 h-auto object-contain"
          />
          <div className="absolute inset-0 bg-odioGreen opacity-30 group-hover:opacity-0 transition-opacity duration-20 ease-in-out"></div>
        </div>
      </div>
      <div className="flex flex-row justify-center align-center gap-8 mt-3 mb-2">
        <button
          className="bg-odioWhite text-odioGreen px-3 py-1 rounded-md"
          onClick={previousImage}
        >
          Previous
        </button>
        <button
          className="bg-odioWhite text-odioGreen px-3 py-1 rounded-md"
          onClick={nextImage}
        >
          Next
        </button>
      </div>
    </>
  );
}
