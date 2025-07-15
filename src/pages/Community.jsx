import community from "../data/community";

export default function Community() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-primary">
        Community Highlight
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {community.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl bg-white shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto max-h-[400px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-primary mb-2">
                {item.title}
              </h2>
              <p className="text-gray-700">{item.content}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
