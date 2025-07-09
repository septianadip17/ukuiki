import { Link } from "react-router-dom";

export default function Section({ id, title, cta, children, className = "" }) {
  return (
    <section id={id} className={`px-4 py-16 mx-auto max-w-6xl ${className}`}>
      <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
      {children}
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
