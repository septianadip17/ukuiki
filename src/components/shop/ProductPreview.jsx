// src/components/ProductPreview.jsx
import { useMemo } from "react";
import PropTypes from "prop-types";
import products from "../../data/products";
import ProductCard from "./ProductCard";

/**
 * Shuffle array secara acak
 */
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
    <div className="flex snap-x scroll-smooth gap-6 overflow-x-auto px-1 md:grid md:grid-cols-3 md:overflow-visible md:snap-none">
      {randomProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

ProductPreview.propTypes = {
  excludeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
