import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center px-6 text-center">

      <h1 className="text-8xl font-bold text-blue-600">
        404
      </h1>

      <h2 className="text-3xl font-bold mt-5">
        Page Not Found
      </h2>

      <p className="text-slate-500 mt-4">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700"
      >
        <ArrowLeft size={18} />
        Back to Home
      </Link>

    </section>
  );
};

export default NotFound;