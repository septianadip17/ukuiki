import { Link } from "react-router-dom";
import { FiInfo } from "react-icons/fi";

export default function AboutHighlight() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      {/* --- Top Content: Text & Image --- */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-extrabold text-primary mb-3">
            We've been painting since 2016
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            UKUiki was formed in early 2016, to express our love of art and
            music. We started from painting ukuleles, and got a lot of positive
            feedback from customers, friends and family. By demands UKUiki later
            started to do workshops and ukulele classes to spread the love of
            music and to help people who want to learn playing ukulele. To
            maintain a good relationship with all UKUiki Class Alumni, we
            started UKUiki Club where all the members can share knowledge about
            ukulele, jamming together or simply meet new friends. From the
            ukulele club later driven by the passion of music UKUiki Ensemble
            was established.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            All of UKUiki Ukuleles are handpainted. The painting designs are
            adjustable to customer’s demand. It makes UKUiki products are
            unique, personalized and one of a kind. Customer also can choose the
            size and kind of ukulele based on their budget.
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
          <div className="relative overflow-hidden rounded-3xl shadow-lg aspect-[4/3]">
            <img
              src="/ukuiki/grazPaints.JPG"
              alt="About UKUiki"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* --- Instagram Embed Below --- */}
      <div className="w-full">
        <div className="overflow-hidden rounded-xl shadow-md max-w-3xl mx-auto aspect-[5/5]">
          <iframe
            src="https://www.instagram.com/ukuiki/embed"
            title="Instagram UKUiki"
            loading="lazy"
            allow="fullscreen"
            className="w-full h-full"
            style={{ backgroundColor: "transparent" }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
