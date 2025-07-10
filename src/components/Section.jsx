import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Section({ id, title, cta, children, className = "" }) {
  return (
    <section id={id} className={`px-4 py-16 mx-auto max-w-6xl ${className}`}>
      {/* Title */}
      {title && (
        <h2 className="text-3xl font-bold text-primary mb-4 text-center md:text-left">
          {title}
        </h2>
      )}

      {/* Content */}
      <div>{children}</div>

      {/* CTA Button */}
      {cta && (
        <div className="mt-6 text-center">
          <Link
            to={cta.to}
            className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition"
          >
            {cta.label}
          </Link>
        </div>
      )}
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.node,
  cta: PropTypes.shape({
    to: PropTypes.string,
    label: PropTypes.node,
  }),
  children: PropTypes.node,
  className: PropTypes.string,
};
