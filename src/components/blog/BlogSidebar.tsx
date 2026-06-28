import { popularPosts, popularTags } from "../../data/blog.data";

interface BlogSidebarProps {
  categories: { label: string; count: number }[];
  activeCategory: string | null;
  onCategoryClick: (category: string) => void;
}

const BlogSidebar = ({
  categories,
  activeCategory,
  onCategoryClick,
}: BlogSidebarProps) => {
  return (
    <aside className="space-y-6">
      <div className="rounded-xl border border-gray-200 p-5">
        <h4 className="text-xs font-semibold tracking-wide text-gray-500">
          KATEGORIYALAR
        </h4>
        <div className="mt-4 space-y-2.5">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => onCategoryClick(cat.label)}
              className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm transition-colors ${
                activeCategory === cat.label
                  ? "bg-blue-50 font-medium text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span>{cat.label}</span>
              <span className="text-gray-400">{cat.count}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 p-5">
        <h4 className="text-xs font-semibold tracking-wide text-gray-500">
          MASHHUR MAQOLALAR
        </h4>
        <div className="mt-4 space-y-3">
          {popularPosts.map((post) => (
            <div key={post.title} className="flex items-start gap-x-3">
              <img
                src={post.image}
                alt={post.title}
                className="h-12 w-12 shrink-0 rounded-lg object-cover"
              />
              <div>
                <p className="text-sm font-medium leading-snug text-gray-900">
                  {post.title}
                </p>
                <p className="mt-0.5 text-xs text-gray-400">{post.views}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 p-5">
        <h4 className="text-xs font-semibold tracking-wide text-gray-500">
          MASHHUR TEGLAR
        </h4>
        <div className="mt-4 flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
