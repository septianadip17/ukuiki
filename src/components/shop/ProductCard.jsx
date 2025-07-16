import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { BuyProduct } from "../utils/BuyProduct.jsx";
import soldBadge from "../../assets/soldBadge.png";

export default function ProductCard({
  product,
  showButton = true,
  compact = false,
}) {
  const isSold = product.badge?.toLowerCase() === "sold";

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg transition mb-10">
      {/* Badge */}
      {isSold && (
        <span className="absolute top-3 right-3 z-10">
          <img src={soldBadge} alt="sold" className="w-16" />
        </span>
      )}

      {/* Gambar */}
      <Link to={`/shop/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover transition duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Konten */}
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-lg font-semibold text-primary mb-1">
          {product.name}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-2">{product.desc}</p>
        <span className="mt-2 font-bold text-primary-light">
          {product.price}
        </span>

        {showButton && (
          <div className="mt-auto pt-4">
            {compact ? (
              <Link
                to={`/shop/${product.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary text-white text-sm px-4 py-2 hover:bg-primary-dark transition"
              >
                <FiSearch />
                See Details
              </Link>
            ) : (
              <a
                href={BuyProduct(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow font-medium transition ${
                  isSold
                    ? "bg-gray-300 text-white cursor-not-allowed"
                    : "bg-primary text-white hover:bg-primary-dark"
                }`}
                {...(isSold && { onClick: (e) => e.preventDefault() })}
              >
                <FiShoppingCart className="text-base" />
                {isSold ? "Sold Out" : "Buy Now"}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
