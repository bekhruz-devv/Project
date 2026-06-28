import { Link } from "react-router-dom";

const BlogHero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex items-center justify-center gap-x-1.5 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-700">
            Bosh sahifa
          </Link>
          <span>›</span>
          <span className="font-medium text-gray-900">Blog</span>
        </div>

        <h1 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl">
          Foydali maqolalar va yangiliklar
        </h1>

        <p className="mt-4 text-base text-gray-500">
          IT, dasturlash, dizayn va karyera bo'yicha eng dolzarb materiallar.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
