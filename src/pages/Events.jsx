import events from "../data/events.js";

export default function Events() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-primary">Events Schedule</h1>
      <div className="space-y-6">
        {events.map((w) => (
          <div
            key={w.id}
            className="rounded-2xl bg-white p-4 shadow-md transition hover:shadow-lg"
          >
            <h2 className="text-xl font-bold text-primary">{w.title}</h2>
            {w.photo && (
              <img
                src={w.photo}
                alt={w.title}
                className="my-4 h-48 w-full rounded-lg object-cover"
              />
            )}
            <p className="mb-2 text-gray-600">{w.desc}</p>
            <p className="text-sm text-gray-500">
              {new Date(w.date).toLocaleDateString("en-EN", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              · {w.time}
            </p>
            <p className="mb-2 text-gray-700">{w.location}</p>
            <a
              href={w.link}
              target="_blank"
              className="inline-block rounded-full bg-primary px-4 py-2 text-white hover:bg-primary-dark"
            >
              Sign Up
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
