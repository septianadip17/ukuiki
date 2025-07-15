import { Link } from "react-router-dom";
import { FiMail, FiMessageSquare } from "react-icons/fi";

export default function ContactHighlight() {
  return (
    <section className="bg-primary-light/10 p-6 md:p-10 rounded-3xl shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        {/* Left Side - Text */}
        <div className="flex-1">
          <h3 className="text-2xl font-extrabold text-primary mb-3 flex items-center justify-center md:justify-start gap-2">
            <FiMail className="text-2xl" />
            Contact Us for Information and Collaboration
          </h3>
          <p className="text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
            Have a question, feedback, or an idea to collaborate?
            <br className="hidden sm:block" />
            Let’s talk and make something amazing together!
          </p>
        </div>

        {/* Right Side - Button */}
        <div className="flex-shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white hover:bg-primary-dark transition duration-300 shadow"
          >
            <FiMessageSquare className="text-lg" />
            Let's Chat
          </Link>
        </div>
      </div>
    </section>
  );
}
