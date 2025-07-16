import { useMemo, useState, useEffect } from "react";
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
    const filtered = products.filter(
      (p) => !p.sold && p.id !== Number(excludeId)
    );
    return shuffleArray(filtered).slice(0, 4);
  }, [excludeId]);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-1">
      {loading
        ? Array.from({ length: 4 }).map((_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))
        : randomProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </div>
  );
}
