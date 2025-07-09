import products from "../data/products";

export default function ShopHighlight({ id }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-6 text-3xl font-bold text-primary">
        Ukulele Ready Stock
      </h2>

      {/* preview grid (3 item) */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.slice(0, 3).map((p) => (
          <article key={p.id} className="rounded-2xl bg-white shadow">
            <img
              src={p.image}
              alt={p.name}
              className="h-40 w-full object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-primary-light font-bold">{p.price}</p>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <Link
          to="/shop"
          className="inline-block rounded-full bg-primary px-6 py-3 text-white hover:bg-primary-dark"
        >
          Lihat Semua Produk
        </Link>
      </div>
    </section>
  );
}
