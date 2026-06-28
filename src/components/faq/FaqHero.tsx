import { Link } from "react-router-dom";
import { Icon } from "../ui/Icon";

const FaqHero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex items-center justify-center gap-x-1.5 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-700">
            Bosh sahifa
          </Link>
          <span>›</span>
          <span className="font-medium text-gray-900">FAQ</span>
        </div>

        <h1 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl">
          Ko'p so'raladigan savollar
        </h1>

        <p className="mt-4 text-base text-gray-500">
          Kurslar, to'lov va sertifikatlar haqidagi eng ko'p so'raladigan
          savollarga javoblar.
        </p>

        <div className="mt-8 flex items-center gap-x-2 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
          <Icon.search />
          <input
            type="text"
            placeholder="Savolingizni qidiring..."
            className="w-full bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
          />
        </div>
      </div>
    </section>
  );
};

export default FaqHero;
