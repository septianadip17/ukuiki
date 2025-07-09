// src/components/EventsHighlight.jsx
import { Link } from "react-router-dom";
import events from "../data/events";

export default function EventsHighlight({ id }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-6 text-3xl font-bold text-primary">Event Terdekat</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {events.slice(0, 2).map((event) => (
          <article key={event.id} className="rounded-2xl bg-white p-4 shadow">
            <h3 className="text-xl font-semibold text-primary">
              {event.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {event.date} · {event.location}
            </p>
            <p className="text-gray-700">{event.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/events"
          className="inline-block rounded-full bg-primary px-6 py-3 text-white hover:bg-primary-dark"
        >
          Lihat Semua Event
        </Link>
      </div>
    </section>
  );
}
