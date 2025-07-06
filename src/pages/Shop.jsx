import products from "../data/products.js";

export default function Shop() {
  return (
    <section className="mx-auto max-w-5xl p-6">
      <h1 className="mb-4 text-3xl font-bold text-primary">
        Ukulele Ready Stock
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl bg-white p-4 shadow hover:shadow-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full rounded-xl object-cover"
            />
            <h2 className="mt-3 font-semibold">{item.name}</h2>
            <p className="text-primary-light font-bold">{item.price}</p>
            {/* tombol beli via WA */}
            <a
              href={`https://wa.me/62xxxxxxxxxxx?text=Halo%20Ukuiki%2C%20saya%20mau%20pesan%20${encodeURIComponent(
                item.name
              )}`}
              target="_blank"
              className="mt-2 inline-block rounded-full bg-primary px-4 py-2 text-white"
            >
              Beli via WhatsApp
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
