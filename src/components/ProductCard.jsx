import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/shop/${product.id}`}
      className="group snap-start flex-shrink-0 w-72 md:w-auto flex flex-col overflow-hidden rounded-2xl bg-white shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="relative h-60 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
        <p className="mb-2 text-sm text-gray-500 line-clamp-2">
          {product.desc}
        </p>

        <span className="mb-4 font-bold text-primary-light">
          {product.price}
        </span>

        <span className="mt-auto inline-block rounded-full bg-primary px-4 py-2 text-center text-white text-sm font-medium hover:bg-primary-dark transition">
          Lihat Detail
        </span>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    image: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};
