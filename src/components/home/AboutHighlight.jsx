import { Link } from "react-router-dom";

export default function AboutHighlight() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 py-12">
      {/* --- Text Section --- */}
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-4">
          UKUiki 🎨🎶
        </h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Founded in 2016, UKUiki is a creative hub where art meets music. We
          started by handpainting ukuleles and quickly grew into a vibrant
          community through workshops and ukulele classes.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          To stay connected with alumni, we formed the UKUiki Club — a space for
          jamming, learning, and building friendships. Later, the UKUiki
          Ensemble was born to embrace our shared passion for music.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Each of our ukuleles is handpainted, customizable, and one-of-a-kind.
          From whimsical foxes to festive themes, our designs are all crafted by{" "}
          <span className="font-semibold">@grazsuwuu</span>. Shop online via
          Instagram <span className="font-semibold">@ukuiki</span> or explore
          our store for more!
        </p>
        <Link
          to="/about"
          className="inline-block rounded-full bg-primary px-6 py-3 text-white font-semibold hover:bg-primary-dark transition duration-300 shadow"
        >
          Learn More
        </Link>
      </div>

      {/* --- Image Section --- */}
      <div className="md:w-1/2 w-full">
        <img
          src="/ukuiki/kakgraz-painting.jpg"
          alt="About UKUiki"
          className="w-full rounded-3xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
