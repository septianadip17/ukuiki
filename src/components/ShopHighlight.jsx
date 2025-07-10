import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import products from "../data/products";

export default function ShopHighlight() {
  const featured = products.slice(0, 6);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
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
            <div className="rounded-xl shadow overflow-hidden bg-white hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className="aspect-video w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-primary mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {product.desc}
                </p>
                <div className="mt-2 text-primary font-bold">
                  {product.price}
                </div>
                <a
                  href={product.link}
                  target="_blank"
                  className="mt-4 inline-block rounded-full bg-primary text-white px-4 py-2 text-sm hover:bg-primary-dark"
                >
                  Beli Sekarang
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
