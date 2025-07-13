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
      <div className="grid md:grid-cols-2 items-center gap-6 px-6 py-10">
        {/* ---- AUTO IMAGE SLIDER ---- */}
        <div className="order-2 md:order-1">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="rounded-xl shadow-md h-64 md:h-80"
          >
            {eventImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ---- TEXT SECTION ---- */}
        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-extrabold text-primary mb-2">
            Event Terdekat 📅
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Jangan sampai ketinggalan konser, workshop, dan keseruan lain yang
            bisa kamu ikuti bersama UKUiki!
          </p>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition"
          >
            <FiCalendar className="text-lg" />
            Lihat Jadwal
          </Link>
        </div>
      </div>
    </section>
  );
}
