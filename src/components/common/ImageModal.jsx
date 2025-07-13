import PropTypes from "prop-types";

export default function ImageModal({ isOpen, onClose, imageSrc, alt }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <img
        src={imageSrc}
        alt={alt}
        className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-lg"
        onClick={(e) => e.stopPropagation()} // agar modal tidak tertutup saat klik gambar
      />
    </div>
  );
}

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageSrc: PropTypes.string,
  alt: PropTypes.string,
};
