import { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      <button onClick={goToPrevImage}>Previous</button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      <button onClick={goToNextImage}>Next</button>
    </div>
  );
};

export default ImageSlider;
