import React, { useState, useEffect } from "react";
import heroImg from "../assets/hero.jpg";
import mobileImg from "../assets/mobile1.jpg";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  // initialize based on screen width
  const [imageSrc, setImageSrc] = useState(
    window.innerWidth < 768 ? mobileImg : heroImg
  );

  useEffect(() => {
    const updateImage = () => {
      setImageSrc(window.innerWidth < 768 ? mobileImg : heroImg);
    };
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden flex justify-center items-center bg-black">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
      )}
      <img
        className={`w-full h-full object-cover transition-opacity duration-1000 shadow-[0_0_50px_rgba(255,0,0,0.5)] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        src={imageSrc}
        alt="hero"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default Hero;
