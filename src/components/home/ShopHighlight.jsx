import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import products from "../../data/products";

// Mini Product Card Component
function ProductCardMini({ product }) {
  return (
    <div className="rounded-2xl bg-white shadow-md hover:shadow-lg transition-all overflow-hidden">
      <Link to={`/shop/${product.id}`} className="block group relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="p-4 flex flex-col h-full">
        <h3 className="text-lg font-bold text-primary mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{product.desc}</p>
        <div className="mt-2 font-semibold text-primary-light">
          {product.price}
        </div>
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-max rounded-full bg-primary px-5 py-2 text-sm text-white hover:bg-primary-dark transition"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default function ShopHighlight() {
  const featuredProducts = products.slice(0, 6);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative py-8">
      <div className="mb-6 text-center">
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Check out our top picks just for you. Discover quality products with
          exciting deals!
        </p>
      </div>

      <div className="relative px-4">
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

        {/* Custom Navigation Buttons with ref */}
        <button
          ref={prevRef}
          className="swiper-button-prev !text-primary !font-bold !text-2xl !w-10 !h-10 !bg-white !rounded-full !shadow-md hover:!bg-primary hover:!text-white transition-all duration-300 absolute top-1/2 -left-2 -translate-y-1/2 z-10"
        >
          
        </button>
        <button
          ref={nextRef}
          className="swiper-button-next !text-primary !font-bold !text-2xl !w-10 !h-10 !bg-white !rounded-full !shadow-md hover:!bg-primary hover:!text-white transition-all duration-300 absolute top-1/2 -right-2 -translate-y-1/2 z-10"
        >
          
        </button>
      </div>
    </section>
  );
}
