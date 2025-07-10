
import { Link } from "react-router-dom";

export default function EventsHighlight() {
  return (
    <div className="grid md:grid-cols-2 items-center gap-6">
      <img
        src="/community/museum-bi.jpg"
        alt="Event"
        className="rounded-lg shadow order-2 md:order-1"
      />
      <div className="order-1 md:order-2">
        <h3 className="text-xl font-bold text-primary mb-2">Event Terdekat</h3>
        <p className="text-gray-700 mb-4">
          Jangan sampai ketinggalan jadwal konser, workshop, dan keseruan lainnya!
        </p>
        <Link
          to="/events"
          className="inline-block px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition"
        >
          Lihat Jadwal
        </Link>
      </div>
    </div>
  );
}
