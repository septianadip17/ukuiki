import workshops from "../data/workshops";

export default function Workshop() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-primary">Jadwal Workshop</h1>
      <div className="space-y-6">
        {workshops.map((w) => (
          <div
            key={w.id}
            className="rounded-2xl bg-white p-4 shadow-md transition hover:shadow-lg"
          >
            <h2 className="text-xl font-bold text-primary">{w.title}</h2>
            <p className="text-sm text-gray-500">
              {new Date(w.date).toLocaleDateString("id-ID", {
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
              Daftar via WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
