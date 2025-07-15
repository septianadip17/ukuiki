import { Link } from "react-router-dom";
import { FiInfo } from "react-icons/fi";

export default function AboutHighlight() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 py-10">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl font-extrabold text-primary mb-3">
          We've been painting since 2016
        </h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          UKUiki was formed in early 2016 to express our love for art and music.
          We began by painting ukuleles and received positive feedback from
          friends and family. Due to popular demand, we expanded to workshops
          and ukulele classes. Later, we formed the UKUiki Club and Ensemble to
          create a fun community for jam sessions, knowledge sharing, and
          friendship.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          All our ukuleles are handpainted—customized to each customer’s style
          and budget. We also offer unique designs like the Christmas, Fox, and
          Fairy series. 
        </p>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white hover:bg-primary-dark transition font-semibold shadow"
        >
          <FiInfo className="text-lg" />
          Learn More
        </Link>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 w-full">
        <div className="relative overflow-hidden rounded-3xl shadow-lg aspect-[3/4]">
          <img
            src="/ukuiki/kakgraz-painting.jpg"
            alt="About UKUiki"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
