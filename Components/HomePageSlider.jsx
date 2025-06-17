"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Luxury Beach Villas",
    subtitle: "Experience the comfort and calm of beachside living.",
  },
  {
    img: "https://res.cloudinary.com/dqvuoldfp/image/upload/v1750060622/stayfinder_dev/nxm0rbpwh86jynqno3dh.jpg",
    title: "Urban Apartments",
    subtitle: "Stay in the heart of the city with panoramic views.",
  },
  {
    img: "https://res.cloudinary.com/dqvuoldfp/image/upload/v1750060623/stayfinder_dev/ukcbozzmzekcsevyueah.jpg",
    title: "Royal Heritage Suites",
    subtitle: "Live like royalty in timeless heritage stays.",
  },
];

export default function HomePageSlider() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 pt-6 pb-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-64 md:h-96 bg-cover bg-center flex items-center justify-center text-white text-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="bg-black/50 p-6 rounded-xl max-w-lg">
                <h2 className="text-2xl md:text-4xl font-bold mb-2">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-lg">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
