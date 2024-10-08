import React, { useState } from "react";
// import "./ImageSlider.css";

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
      <div className="imageSlider">
        {/* {images.map((image) => (
        <img
          style={{ width: "50%" }}
          src={require(`../../../../images/${image}.png`)}
          alt="logo_queretaro"
          className="logo_img"
        />
      ))} */}

        {/* <div className="canvas">
        
      </div> */}

        <img
          src={require(`../../../../images/${images[imageIndex]}.png`)}
          alt="logo_queretaro"
          className="logo_img"
        />
      </div>
      <div className="sliderControls">
        <button onClick={previousImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </>
  );
}
