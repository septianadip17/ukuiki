// src/components/home/ShopHighlight.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import products from "../../data/products";

// Mini card reusable
function ProductCardMini({ product }) {
  return (
    <div className="rounded-xl bg-white shadow transition hover:shadow-lg">
      <Link to={`/shop/${product.id}`} className="block group relative">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="p-4 flex flex-col h-full">
        <h3 className="text-lg font-semibold text-primary mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3">{product.desc}</p>
        <div className="mt-2 font-bold text-primary-light">{product.price}</div>
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block w-max rounded-full bg-primary px-4 py-2 text-sm text-white transition hover:bg-primary-dark"
        >
          Beli Sekarang
        </a>
      </div>
    </div>
  );
}

export default function ShopHighlight() {
  const featured = products.slice(0, 6);

  return (
    <section className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {featured.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCardMini product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
