import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FiShoppingBag, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import products from "../../data/products";
import ProductCard from "../shop/ProductCard.jsx";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ShopHighlight() {
  const featuredProducts = products.slice(0, 6);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiperUpdate = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section id="shop" className="relative py-3 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-5">
        <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
          We provide varies of ukuleles and accessories. Shop our unique
          handpainted ukuleles, or order one with customized paintings. Explore
          our premium ukuleles that suitable for your needs.
        </p>
      </div>

      {/* Swiper */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSwiper={(swiper) => {
            handleSwiperUpdate(swiper);
          }}
          onSlideChange={(swiper) => handleSwiperUpdate(swiper)}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                product={product}
                showButton={true}
                compact={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          aria-label="Previous"
          disabled={isBeginning}
          className={`absolute top-1/2 left-0 -translate-y-1/2 z-10 flex items-center justify-center
            w-10 h-10 rounded-full bg-white text-primary shadow-md transition-all duration-300
            hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary
            ${
              isBeginning
                ? "opacity-30 cursor-not-allowed hover:bg-white hover:text-primary"
                : ""
            }`}
        >
          <FiChevronLeft className="text-xl" />
        </button>

        <button
          ref={nextRef}
          aria-label="Next"
          disabled={isEnd}
          className={`absolute top-1/2 right-0 -translate-y-1/2 z-10 flex items-center justify-center
            w-10 h-10 rounded-full bg-white text-primary shadow-md transition-all duration-300
            hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary
            ${
              isEnd
                ? "opacity-30 cursor-not-allowed hover:bg-white hover:text-primary"
                : ""
            }`}
        >
          <FiChevronRight className="text-xl" />
        </button>
      </div>

      {/* CTA Button */}
      <div className="p-4 border-b border-gray-200 text-center">
        <Link
          to="/shop"
          className="group inline-flex justify-center items-center gap-3 rounded-full bg-primary mb-4 px-6 py-3 text-white font-medium shadow-md hover:bg-primary-dark transition duration-300"
        >
          <FiShoppingBag className="text-xl group-hover:animate-bounce" />
          <span>Browse All Products</span>
        </Link>
      </div>
    </section>
  );
}
