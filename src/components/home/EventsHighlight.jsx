import { Link } from "react-router-dom";
import { FiCalendar } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const eventImages = [
  { src: "/community/museum-bi.jpg", alt: "Museum BI" },
  { src: "/community/concert-at-gripa.jpeg", alt: "Concert at Gripa" },
  { src: "/community/ioef-mbloc.jpg", alt: "IOEF MBloc" },
];

export default function EventsHighlight() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg">
      <div className="grid items-center gap-8 px-6 py-12 md:grid-cols-2">
        {/* ---- IMAGE SLIDER ---- */}
        <div className="order-2 md:order-1">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="rounded-xl shadow-md h-64 md:h-80"
          >
            {eventImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 rounded-xl" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ---- TEXT SECTION ---- */}
        <div className="order-1 md:order-2 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-3">
            Event Terdekat 📅
          </h3>
          <p className="text-gray-700 mb-5 leading-relaxed max-w-md mx-auto md:mx-0">
            Jangan sampai ketinggalan konser, workshop, dan keseruan lain yang
            bisa kamu ikuti bersama <strong>UKUiki</strong>!
          </p>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white shadow hover:bg-primary-dark transition duration-300"
          >
            <FiCalendar className="text-lg" />
            Lihat Jadwal
          </Link>
        </div>
      </div>
    </section>
  );
}
