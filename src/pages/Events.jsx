import { useState } from "react";
import events from "../data/events.js";
import ImageModal from "../components/common/ImageModal.jsx";
import { FiArrowRightCircle } from "react-icons/fi";

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
    const isPastA = dateA < today;
    const isPastB = dateB < today;
    if (isPastA && !isPastB) return 1;
    if (!isPastA && isPastB) return -1;
    return dateB - dateA;
  });

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-extrabold text-primary drop-shadow">
        Upcoming Events!
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        {sortedEvents.map((w) => (
          <div
            key={w.id}
            className="rounded-2xl bg-white shadow-md transition hover:shadow-lg overflow-hidden flex flex-col"
          >
            {w.photo && (
              <img
                src={w.photo}
                alt={w.title}
                onClick={() => handleImageClick(w.photo, w.title)}
                className="w-full h-56 md:h-64 object-cover cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 rounded-t-2xl hover:shadow-lg"
              />
            )}
            <div className="flex flex-col p-5 flex-1">
              <h2 className="text-xl font-bold text-primary mb-2">{w.title}</h2>
              <p className="text-gray-600 mb-2 line-clamp-3">{w.desc}</p>
              <p className="text-sm text-gray-500 mb-1">
                {new Date(w.date).toLocaleDateString("en-EN", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                · {w.time}
              </p>
              <p className="text-sm text-gray-700 mb-3">{w.location}</p>
              <a
                href={w.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block w-max rounded-full bg-primary px-5 py-2 text-sm text-white hover:bg-primary-dark transition duration-300 group"
              >
                <FiArrowRightCircle className="inline-block mr-2 text-xl group-hover:animate-bounce" />
                Sign Up
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Gambar */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={modalImage}
        alt={modalAlt}
      />
    </section>
  );
}
