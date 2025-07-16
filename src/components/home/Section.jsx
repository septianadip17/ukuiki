export default function Section({ id, title, children, className = "" }) {
  return (
    <section
      id={id}
      className={`px-4 py-16 mx-auto max-w-6xl scroll-mt-80 md:scroll-mt-14 ${className}`}
    >
      {title && (
        <h2 className="text-4xl font-bold text-primary mb-2 text-center md:text-left">
          {title}
        </h2>
      )}
      <div>{children}</div>
    </section>
  );
}
