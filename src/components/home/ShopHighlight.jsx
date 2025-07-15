import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import {
  FiShoppingCart,
  FiShoppingBag,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import products from "../../data/products";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BuyProduct } from "../utils/BuyProduct.jsx";

export default function ShopHighlight() {
  const featuredProducts = products.slice(0, 6);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiperUpdate = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section id="shop" className="relative py-3 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-5">
        <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
          We provide varies of ukuleles and accessories. Shop our unique
          handpainted ukuleles, or order one with customized paintings. Explore
          our premium ukuleles that suitable for your needs.
        </p>
      </div>

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
            setSwiperInstance(swiper);
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
              <ProductCardMini product={product} />
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
function ProductCardMini({ product }) {
  const isSold = product.badge?.toLowerCase() === "sold";

  return (
    <div className="relative rounded-2xl bg-white shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col h-full mb-10">
      {product.badge && (
        <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {product.badge}
        </span>
      )}

      <Link to={`/shop/${product.id}`} className="block group relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-bold text-primary mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3">{product.desc}</p>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <span className="font-semibold text-primary-light">
            {product.price}
          </span>
          <a
            href={BuyProduct(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow transition font-medium ${
              isSold
                ? "bg-gray-300 cursor-not-allowed text-white"
                : "bg-primary text-white hover:bg-primary-dark"
            }`}
            {...(isSold && { onClick: (e) => e.preventDefault() })}
          >
            <FiShoppingCart className="text-base" />
            {isSold ? "Sold Out" : "Buy Now"}
          </a>
        </div>
      </div>
    </div>
  );
}
