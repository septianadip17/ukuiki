import { useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import products from "../../data/products.js";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

function shuffleArray(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function ProductPreview({ excludeId }) {
  const [loading, setLoading] = useState(true);

  const randomProducts = useMemo(() => {
    const filtered = excludeId
      ? products.filter((p) => p.id !== Number(excludeId))
      : [...products];
    return shuffleArray(filtered).slice(0, 3);
  }, [excludeId]);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex snap-x scroll-smooth gap-6 overflow-x-auto px-1 md:grid md:grid-cols-3 md:overflow-visible md:snap-none">
      {loading
        ? Array.from({ length: 3 }).map((_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))
        : randomProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </div>
  );
}

ProductPreview.propTypes = {
  excludeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
