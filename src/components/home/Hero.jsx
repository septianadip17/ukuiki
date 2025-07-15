import { Link } from "react-router-dom";
import { FiShoppingBag, FiCalendar } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      className="relative flex items-center min-h-[50vh] md:min-h-[70vh] bg-cover bg-center px-4"
      style={{ backgroundImage: 'url("/ukulele/unicorn-ukulele.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl w-full">
        <div className="text-white max-w-lg px-4 py-10 md:py-16">
          <h1 className="mb-4 text-5xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">
            UKUiki
          </h1>
          <p className="mb-6 text-base md:text-lg text-white/90 drop-shadow-md leading-relaxed">
            When art meets music,
            <br />
            paintings and melodies
            <br />
            through ukulele.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 rounded-full bg-primary-dark px-6 py-3 text-white font-semibold shadow hover:bg-primary-dark/80 transition"
            >
              <FiShoppingBag className="text-xl group-hover:animate-bounce" />
              Shop Now
            </Link>
            <Link
              to="/events"
              className="group inline-flex items-center gap-2 rounded-full bg-primary-light px-6 py-3 text-white font-semibold shadow hover:bg-primary-light/80 transition"
            >
              <FiCalendar className="text-xl group-hover:animate-bounce" />
              Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
