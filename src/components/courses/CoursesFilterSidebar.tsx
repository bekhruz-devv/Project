import { categories, levels } from "../../data/courses.data";

export interface CourseFilters {
  selectedCategories: string[];
  selectedLevel: string | null;
  minPrice: number | null;
  maxPrice: number | null;
}

interface CoursesFilterSidebarProps {
  filters: CourseFilters;
  onCategoryToggle: (category: string) => void;
  onLevelChange: (level: string | null) => void;
  onPriceChange: (min: number | null, max: number | null) => void;
  onReset: () => void;
}

const CoursesFilterSidebar = ({
  filters,
  onCategoryToggle,
  onLevelChange,
  onPriceChange,
  onReset,
}: CoursesFilterSidebarProps) => {
  return (
    <aside className="w-full space-y-6 rounded-xl border border-gray-200 p-5 lg:w-72">
      <div>
        <h4 className="text-xs font-semibold tracking-wide text-gray-500">
          KATEGORIYA
        </h4>
        <div className="mt-3 space-y-2.5">
          {categories.map((cat) => (
            <label
              key={cat.label}
              className="flex items-center gap-x-2.5 text-sm text-gray-700"
            >
              <input
                type="checkbox"
                checked={filters.selectedCategories.includes(cat.label)}
                onChange={() => onCategoryToggle(cat.label)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              {cat.label} ({cat.count})
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold tracking-wide text-gray-500">
          DARAJA
        </h4>
        <div className="mt-3 space-y-2.5">
          <label className="flex items-center gap-x-2.5 text-sm text-gray-700">
            <input
              type="radio"
              name="level"
              checked={filters.selectedLevel === null}
              onChange={() => onLevelChange(null)}
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            Barchasi
          </label>
          {levels.map((level) => (
            <label
              key={level}
              className="flex items-center gap-x-2.5 text-sm text-gray-700"
            >
              <input
                type="radio"
                name="level"
                checked={filters.selectedLevel === level}
                onChange={() => onLevelChange(level)}
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              {level}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold tracking-wide text-gray-500">
          NARX ORALIG'I (SO'M)
        </h4>
        <div className="mt-3 flex items-center gap-x-2">
          <input
            type="number"
            placeholder="400 000"
            value={filters.minPrice ?? ""}
            onChange={(e) =>
              onPriceChange(
                e.target.value ? Number(e.target.value) : null,
                filters.maxPrice,
              )
            }
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          />
          <span className="text-gray-400">—</span>
          <input
            type="number"
            placeholder="2 000 000"
            value={filters.maxPrice ?? ""}
            onChange={(e) =>
              onPriceChange(
                filters.minPrice,
                e.target.value ? Number(e.target.value) : null,
              )
            }
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-x-3 pt-2">
        <button className="flex-1 rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
          Filtrlash
        </button>
        <button
          onClick={onReset}
          className="text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          Tozalash
        </button>
      </div>
    </aside>
  );
};

export default CoursesFilterSidebar;
