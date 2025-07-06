import news from "../data/news";

export default function News() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-primary">Berita Komunitas</h1>
      <div className="space-y-6">
        {news.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl bg-white shadow-md hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full rounded-t-2xl object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-primary">{item.title}</h2>
              <p className="text-sm text-gray-400 mb-2">
                {new Date(item.date).toLocaleDateString("id-ID", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p className="text-gray-700">{item.content}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
