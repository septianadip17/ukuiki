// src/pages/ProductDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

import products from "../data/products";
import ImageModal from "../components/shop/ImageModal";
import ProductPreview from "../components/shop/ProductPreview";
import { BuyProduct } from "../components/utils/BuyProduct";

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const currentIndex = products.findIndex((p) => p.id === Number(productId));
  const product = products[currentIndex];
  const prevProduct =
    products[(currentIndex - 1 + products.length) % products.length];
  const nextProduct = products[(currentIndex + 1) % products.length];

  if (!product) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-primary">Product Not Found</h1>
        <button
          onClick={() => navigate("/shop")}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-white hover:bg-primary-dark"
        >
          <FiShoppingBag />
          Back to Shop
        </button>
      </section>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={product.id}
        className="mx-auto max-w-6xl px-4 py-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
      >
        {/* ---- Product Info ---- */}
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Product Image */}
          <div
            className="flex-1 relative group cursor-zoom-in aspect-square"
            onClick={() => setShowModal(true)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-xl shadow-lg transition duration-300 group-hover:scale-105"
            />
          </div>

          {/* Product Detail */}
          <div className="flex-1">
            <h1 className="mb-2 text-3xl font-bold text-primary">
              {product.name}
            </h1>
            <p className="mb-4 text-gray-700">{product.desc}</p>
            <div>
              <p className="mb-6 text-xl font-semibold text-primary-light">
                {product.price}
              </p>

              {product.sold ? (
                <button
                  disabled
                  className="inline-flex items-center gap-2 rounded-full bg-gray-300 px-6 py-3 text-white cursor-not-allowed"
                >
                  <FaWhatsapp className="text-lg" />
                  Sold Out
                </button>
              ) : (
                <a
                  href={BuyProduct(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white hover:bg-primary-dark transition"
                >
                  <FaWhatsapp className="text-lg" />
                  Buy via WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>

        {/* ---- Navigation Buttons ---- */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-between">
          {/* Prev Product */}
          <button
            onClick={() => navigate(`/shop/${prevProduct.id}`)}
            className="flex items-center justify-center gap-2 rounded-full border border-primary px-5 py-2 text-primary shadow-sm transition hover:bg-primary-light/10"
          >
            <span className="text-lg">←</span>
            <span className="text-sm font-medium">{prevProduct.name}</span>
          </button>

          {/* Back to Shop */}
          <button
            onClick={() => navigate("/shop")}
            className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-medium text-white shadow-md transition hover:bg-primary-dark"
          >
            <FiShoppingBag className="text-base" />
            Back to Shop
          </button>

          {/* Next Product */}
          <button
            onClick={() => navigate(`/shop/${nextProduct.id}`)}
            className="flex items-center justify-center gap-2 rounded-full border border-primary px-5 py-2 text-primary shadow-sm transition hover:bg-primary-light/10"
          >
            <span className="text-sm font-medium">{nextProduct.name}</span>
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* ---- Product Recommendations ---- */}
        <div className="mt-16">
          <h2 className="mb-4 text-2xl font-bold text-primary">
            Another Product You Might Like
          </h2>
          <ProductPreview excludeId={product.id} />
        </div>

        {/* ---- Modal ---- */}
        <ImageModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          imageSrc={product.image}
          alt={product.name}
        />
      </motion.section>
    </AnimatePresence>
  );
}
