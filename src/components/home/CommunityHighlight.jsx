import { Link } from "react-router-dom";
import { FiCamera } from "react-icons/fi";

export default function CommunityHighlight() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl shadow-md overflow-hidden">
      <div className="grid md:grid-cols-2 items-center gap-10 px-6 py-12 max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-4">
            Our Community Activities 🎶
          </h3>
          <p className="text-gray-700 leading-relaxed mb-5">
            UKUiki was born from a common question after our workshops:
            <strong> “Where can we play ukulele together?”</strong>
            <br />
            <br />
            From there, the UKUiki Club was formed — a friendly space to jam,
            learn, and connect with others. Later, driven by the passion for
            music, the <strong>UKUiki Ensemble</strong> was born — performing
            and spreading the joy of ukulele even further.
          </p>
          <Link
            to="/community"
            className="inline-block rounded-full bg-primary px-6 py-3 text-white font-medium shadow hover:bg-primary-dark transition group"
          >
            <FiCamera className="inline-block mr-2 group-hover:animate-bounce" />
            View Documentation
          </Link>
        </div>

        {/* Image Section */}
        <div className="order-1 md:order-2">
          <div className="relative overflow-hidden rounded-xl shadow-md group">
            <img
              src="/community/concert-at-gripa.jpeg"
              alt="UKUiki Community Event"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
            />
            <div className="absolute inset-0 bg-black/10 rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
