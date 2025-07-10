import products from "../data/products";

export default function Shop() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-primary">
        Shop Our Unique Ukuleles
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <article className="flex flex-col rounded-2xl bg-white shadow-md transition hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h2 className="text-lg font-semibold text-primary">{product.name}</h2>
          <p className="mt-1 text-sm text-gray-600">{product.desc}</p>
        </div>

        <div className="mt-4">
          <span className="block mb-3 font-bold text-primary-light">
            {product.price}
          </span>
          <a
            href={`https://wa.me/6289696135242?text=Halo%20Ukuiki%2C%20saya%20mau%20pesan%20${encodeURIComponent(
              product.name
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full rounded-full bg-primary px-4 py-2 text-center text-white hover:bg-primary-dark transition"
          >
            Beli via WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
