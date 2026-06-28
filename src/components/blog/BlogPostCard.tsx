import { Link } from "react-router-dom";
import type { BlogPost } from "../../data/blog.data";

interface BlogPostCardProps {
  post: BlogPost;
}

const categoryColors: Record<string, string> = {
  Frontend: "bg-blue-50 text-blue-600",
  Backend: "bg-gray-100 text-gray-700",
  Dizayn: "bg-purple-50 text-purple-600",
  Mobil: "bg-orange-50 text-orange-600",
  "Data Science": "bg-red-50 text-red-600",
  Marketing: "bg-blue-50 text-blue-600",
  DevOps: "bg-gray-100 text-gray-700",
  Karyera: "bg-blue-50 text-blue-600",
};

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const isDetailAvailable = post.id === "post-1";

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <img
        src={post.image}
        alt={post.title}
        className="h-44 w-full object-cover"
      />

      <div className="p-5">
        <div className="flex items-center gap-x-2 text-xs">
          <span
            className={`rounded-md px-2 py-1 font-medium ${
              categoryColors[post.category] ?? "bg-gray-100 text-gray-700"
            }`}
          >
            {post.category}
          </span>
          <span className="text-gray-400">{post.date}</span>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-gray-900">
          {post.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-gray-500">
          {post.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <img
              src={post.authorAvatar}
              alt={post.authorName}
              className="h-7 w-7 rounded-full object-cover"
            />
            <span className="text-sm text-gray-700">{post.authorName}</span>
          </div>

          {isDetailAvailable ? (
            <Link
              to={`/blog/${post.id}`}
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              O'qish →
            </Link>
          ) : (
            <span className="cursor-pointer text-sm font-medium text-blue-600">
              O'qish →
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
