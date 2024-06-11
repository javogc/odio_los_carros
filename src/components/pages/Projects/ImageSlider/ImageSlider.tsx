import React from "react";
import "./ImageSlider.css";

type ImageSliderProps = {
  images: string[];
};

export default function ImageSlider({ images }: ImageSliderProps) {
  return (
    <div className="imageSlider">
      {images.map((image) => (
        <img
          style={{ width: "50%" }}
          src={require(`../../../../images/${image}.png`)}
          alt="logo_queretaro"
          className="logo_img"
        />
      ))}
    </div>
  );
}
