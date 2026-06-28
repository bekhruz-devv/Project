import { Link } from "react-router-dom";
import { featuredPost } from "../../data/blog.data";

const FeaturedPost = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200">
      <div className="grid lg:grid-cols-2">
        <img
          src={featuredPost.image}
          alt={featuredPost.title}
          className="h-64 w-full object-cover lg:h-full"
        />

        <div className="flex flex-col justify-center p-8">
          <span className="text-xs font-semibold tracking-wide text-blue-600">
            TANLANGAN · 2026-YIL ENG YAXSHI MAQOLA
          </span>

          <Link to={`/blog/${featuredPost.id}`}>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 hover:text-blue-600">
              {featuredPost.title}
            </h2>
          </Link>

          <p className="mt-3 text-sm text-gray-600">
            {featuredPost.description}
          </p>

          <div className="mt-5 flex items-center gap-x-2.5">
            <img
              src={featuredPost.authorAvatar}
              alt={featuredPost.authorName}
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-sm text-gray-700">
              {featuredPost.authorName}
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-500">{featuredPost.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
