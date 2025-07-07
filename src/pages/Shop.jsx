import products from "../data/products";

export default function Shop() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-primary">
        Shop Our Unique Ukuleles
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article
            key={p.id}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow transition hover:shadow-lg"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-54 w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="flex flex-1 flex-col p-4">
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="mb-2 text-sm text-gray-500">{p.desc}</p>
              <span className="mb-4 text-primary-light font-bold">
                {p.price}
              </span>

              <a
                href={`https://wa.me/6289696135242?text=Halo%20Ukuiki%2C%20saya%20mau%20pesan%20${encodeURIComponent(
                  p.name
                )}`}
                target="_blank"
                className="mt-auto inline-block rounded-full bg-primary px-4 py-2 text-center text-white"
              >
                Beli via WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
