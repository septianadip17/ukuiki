// ProductPreview.jsx
import products from "../data/products";
import PropTypes from "prop-types";

export default function ProductPreview({ excludeId }) {
  const filtered = excludeId
    ? products.filter((p) => p.id !== excludeId).slice(0, 3)
    : products.slice(0, 3);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map((p) => (
        <article
          key={p.id}
          className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow transition hover:shadow-lg"
        >
          <img
            src={p.image}
            alt={p.name}
            className="h-60 w-full object-cover transition duration-300 group-hover:scale-105"
          />
          <div className="flex flex-1 flex-col p-4">
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="mb-2 text-sm text-gray-500 line-clamp-2">{p.desc}</p>
            <span className="mb-4 font-bold text-primary-light">{p.price}</span>
            <span className="mt-auto inline-block rounded-full bg-primary px-4 py-2 text-center text-white">
              Lihat Detail
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
ProductPreview.propTypes = {
  excludeId: PropTypes.string,
};