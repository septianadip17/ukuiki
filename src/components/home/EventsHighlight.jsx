import { useMemo } from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiCamera } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import events from "../../data/events.js";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function EventsHighlight() {
  // Memoize filtering logic to prevent re-calculation on every render
  const { displayEvents, isUpcoming } = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize time for accurate date comparison

    // Priority 1: Fetch Upcoming events (Sort: Ascending / Nearest first)
    const upcoming = events
      .filter((evt) => evt.photo && new Date(evt.date) >= today)
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    if (upcoming.length > 0) {
      return { displayEvents: upcoming, isUpcoming: true };
    }

    // Priority 2: Fallback to Past events (Sort: Descending / Newest first)
    // Limit to top 5 recent events for gallery view
    const past = events
      .filter((evt) => evt.photo && new Date(evt.date) < today)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);

    return { displayEvents: past, isUpcoming: false };
  }, []);

  // Guard clause: Prevent rendering if dataset is empty to avoid UI layout shift
  if (!displayEvents || displayEvents.length === 0) {
    return null;
  }

  // Config object for dynamic UI text/icons based on state
  const content = isUpcoming
    ? {
        title: "Upcoming Events 🎉",
        desc: "Don't miss our upcoming events whether workshops, classes, performances and concerts!",
        btnText: "View Schedule",
        btnIcon: <FiCalendar className="text-lg group-hover:animate-bounce" />,
        badgeColor: "bg-orange-500",
        badgeText: "UPCOMING",
      }
    : {
        title: "Past Events 📸",
        desc: "We had a blast! Check out the joy and music from our previous workshops.",
        btnText: "See More Gallery",
        btnIcon: (
          <FiCamera className="text-lg group-hover:rotate-12 transition-transform" />
        ),
        badgeColor: "bg-primary",
        badgeText: "PAST EVENT",
      };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-8 px-6 py-12">
        {/* Slider Section */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={displayEvents.length > 1}
            className="aspect-[3/4] w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-xl shadow-md"
          >
            {displayEvents.map((evt, index) => (
              <SwiperSlide key={evt.id || index}>
                <div className="relative w-full h-full overflow-hidden rounded-xl group">
                  <img
                    src={evt.photo}
                    alt={evt.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />

                  {/* Event Meta Label */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${content.badgeColor}`}
                    >
                      {content.badgeText}
                    </span>
                    <p className="font-bold text-lg drop-shadow-md line-clamp-2">
                      {evt.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-3">
            {content.title}
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed max-w-md mx-auto md:mx-0">
            {content.desc}
          </p>

          <Link
            to="/events"
            className="group inline-flex justify-center items-center gap-3 rounded-full bg-primary mb-4 px-6 py-3 text-white font-medium shadow-md hover:bg-primary-dark transition duration-300 transform hover:-translate-y-1"
          >
            {content.btnIcon}
            {content.btnText}
          </Link>
        </div>
      </div>
    </section>
  );
}
