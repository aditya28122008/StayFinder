"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const PropertyImagePage = ({ propImages, propMainImage }) => {
  const [images] = useState(propImages);
  const [mainImage, setMainImage] = useState(propMainImage);
  const swiperRef = useRef(null);

  const handleThumbnailClick = (index) => {
    swiperRef.current?.slideTo(index);
    setMainImage(images[index]);
  };

  return (
    <div className="md:w-1/2">
      {/* Main Image Slider */}
      <div className="relative w-full h-96 rounded-xl overflow-hidden mb-4">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setMainImage(images[swiper.activeIndex])}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          modules={[Navigation]}
          className="h-full rounded-xl"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <Image
                src={img.url}
                alt={`Main Slide ${i + 1}`}
                fill
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.slice(0, 5).map((img, i) => (
          <div
            key={i}
            className={`relative w-full h-24 rounded-md overflow-hidden cursor-pointer ring-2 ${
              mainImage.url === img.url
                ? "ring-cyan-600"
                : "ring-transparent hover:ring-cyan-300"
            }`}
            onClick={() => handleThumbnailClick(i)}
          >
            <Image
              src={img.url}
              alt={`Thumb ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyImagePage;
