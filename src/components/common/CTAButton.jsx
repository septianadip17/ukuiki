import { Link } from "react-router-dom";

export default function CTAButton({ to, icon: Icon, label }) {
  return (
    <div className="p-4 border-gray-200 text-center">
      <Link
        to={to}
        className="group inline-flex justify-center items-center gap-3 rounded-full bg-primary mb-4 px-6 py-3 text-white font-medium shadow-md hover:bg-primary-dark transition duration-300"
      >
        <Icon className="text-xl group-hover:animate-bounce" />
        <span>{label}</span>
      </Link>
    </div>
  );
}
