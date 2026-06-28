import { useState } from "react";
import { courses } from "../data/courses.data";
import CoursesFilterSidebar, {
  type CourseFilters,
} from "../components/courses/CoursesFilterSidebar";
import CoursesHero from "../components/courses/CoursesHero";
import CourseCard from "../components/courses/CourseCard";

const Courses = () => {
  const [filters, setFilters] = useState<CourseFilters>({
    selectedCategories: [],
    selectedLevel: null,
    minPrice: null,
    maxPrice: null,
  });

  const handleCategoryToggle = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      selectedCategories: prev.selectedCategories.includes(category)
        ? prev.selectedCategories.filter((c) => c !== category)
        : [...prev.selectedCategories, category],
    }));
  };

  const handleLevelChange = (level: string | null) => {
    setFilters((prev) => ({ ...prev, selectedLevel: level }));
  };

  const handlePriceChange = (min: number | null, max: number | null) => {
    setFilters((prev) => ({ ...prev, minPrice: min, maxPrice: max }));
  };

  const handleReset = () => {
    setFilters({
      selectedCategories: [],
      selectedLevel: null,
      minPrice: null,
      maxPrice: null,
    });
  };

  const filteredCourses = courses.filter((course) => {
    if (
      filters.selectedCategories.length > 0 &&
      !filters.selectedCategories.includes(course.category)
    ) {
      return false;
    }
    if (filters.selectedLevel && course.level !== filters.selectedLevel) {
      return false;
    }
    if (filters.minPrice !== null && course.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice !== null && course.price > filters.maxPrice) {
      return false;
    }
    return true;
  });

  return (
    <>
      <CoursesHero />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <CoursesFilterSidebar
            filters={filters}
            onCategoryToggle={handleCategoryToggle}
            onLevelChange={handleLevelChange}
            onPriceChange={handlePriceChange}
            onReset={handleReset}
          />

          <div className="flex-1">
            <p className="mb-4 text-sm text-gray-500">
              {filteredCourses.length} ta kurs topildi
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <p className="mt-10 text-center text-gray-500">
                Hech qanday kurs topilmadi. Filtrlarni o'zgartirib ko'ring.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
