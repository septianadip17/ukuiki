import { useMemo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import products from "../data/products";

function shuffleArray(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function ProductPreview({ excludeId }) {
  const randomProducts = useMemo(() => {
    const filtered = excludeId
      ? products.filter((p) => p.id !== Number(excludeId))
      : [...products];
    return shuffleArray(filtered).slice(0, 3);
  }, [excludeId]);

  return (
    <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-3 md:overflow-visible scroll-smooth snap-x md:snap-none">
      {randomProducts.map((p) => (
        <Link
          key={p.id}
          to={`/shop/${p.id}`}
          className="group snap-start flex-shrink-0 w-72 md:w-auto flex flex-col overflow-hidden rounded-2xl bg-white shadow transition hover:shadow-lg"
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
        </Link>
      ))}
    </div>
  );
}

ProductPreview.propTypes = {
  excludeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
