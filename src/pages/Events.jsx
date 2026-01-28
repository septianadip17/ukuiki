import { useState } from "react";
import events from "../data/events.js";
import ImageModal from "../components/common/ImageModal.jsx";
import { FiArrowRightCircle } from "react-icons/fi";
import { JoinWorkshop } from "../components/utils/JoinWorkshop.jsx";

// --- SUB-COMPONENT: EXPANDABLE TEXT ---
const ExpandableText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongText = text.length > 100;

  return (
    <div className="mb-3">
      <p
        className={`text-gray-600 text-sm md:text-base transition-all duration-300 ${
          isExpanded ? "" : "line-clamp-3"
        }`}
      >
        {text}
      </p>

      {isLongText && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs md:text-sm font-semibold text-primary hover:text-primary-dark mt-2 focus:outline-none transition-colors"
        >
          {isExpanded ? "See Less" : "... See More"}
        </button>
      )}
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function Events() {
  const today = new Date();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  const handleImageClick = (src, alt) => {
    setModalImage(src);
    setModalAlt(alt);
    setModalOpen(true);
  };

  const sortedEvents = [...events].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    const todayZero = new Date();
    todayZero.setHours(0, 0, 0, 0);
    dateA.setHours(0, 0, 0, 0);
    dateB.setHours(0, 0, 0, 0);

    const isPastA = dateA < todayZero;
    const isPastB = dateB < todayZero;

    if (isPastA && !isPastB) return 1;
    if (!isPastA && isPastB) return -1;

    if (!isPastA && !isPastB) return dateA - dateB;
    return dateB - dateA;
  });

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-3xl md:text-4xl font-extrabold text-primary drop-shadow text-center md:text-left">
        Upcoming Events!
      </h1>

      {/* Responsive Grid: 1 -> 2 -> 3 Cols */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sortedEvents.map((w) => (
          <div
            key={w.id}
            className="group flex flex-col rounded-2xl bg-white shadow-md transition hover:shadow-lg overflow-hidden"
          >
            {w.photo && (
              // IMAGE STYLE: RESTORED TO ORIGINAL (ASPECT-SQUARE)
              <img
                src={w.photo}
                alt={w.title}
                onClick={() => handleImageClick(w.photo, w.title)}
                className="w-full aspect-square object-cover cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 rounded-t-2xl hover:shadow-lg"
              />
            )}

            <div className="flex flex-col p-5 md:p-6 flex-1">
              <h2 className="text-lg md:text-xl font-bold text-primary mb-2 line-clamp-2">
                {w.title}
              </h2>

              {/* Text Expander Logic */}
              <ExpandableText text={w.desc} />

              <div className="mt-auto space-y-2 border-t pt-3">
                <p className="text-xs md:text-sm text-gray-500 font-medium">
                  {new Date(w.date).toLocaleDateString("en-EN", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  · {w.time}
                </p>
                <p className="text-xs md:text-sm text-gray-700 line-clamp-2">
                  {w.location}
                </p>
              </div>

              <a
                href={JoinWorkshop(w.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-all duration-300 group/btn"
              >
                <FiArrowRightCircle className="mr-2 text-lg group-hover/btn:animate-bounce" />
                Sign Up
              </a>
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={modalImage}
        alt={modalAlt}
      />
    </section>
  );
}
