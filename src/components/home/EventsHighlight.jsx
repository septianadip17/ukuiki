import { Link } from "react-router-dom";
import { FiCalendar } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const eventImages = [
  { src: "/banner/summer-class.webp", alt: "Summer Class" },
  { src: "/banner/summerclass-polarasa.jpeg", alt: "Summer Class Polarasa" },
];

export default function EventsHighlight() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-8 px-6 py-12">
        {/* ---- IMAGE SLIDER ---- */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="aspect-[3/4] w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-xl shadow-md"
          >
            {eventImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full overflow-hidden rounded-xl">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 rounded-xl" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ---- TEXT SECTION ---- */}
        <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-3">
            Upcoming Events 🎉
          </h3>
          <p className="text-gray-700 mb-5 leading-relaxed max-w-md mx-auto md:mx-0">
            Don't miss our upcoming events whether workshops, classes,
            performances and concerts!
          </p>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white shadow hover:bg-primary-dark transition duration-300"
          >
            <FiCalendar className="text-lg" />
            View Schedule
          </Link>
        </div>
      </div>
    </section>
  );
}
