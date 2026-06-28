import { Link } from "react-router-dom";
import { Icon } from "../ui/Icon";
import type { Course } from "../../data/courses.data";

export interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <img
        src={course.image}
        alt={course.title}
        className="h-44 w-full object-cover"
      />

      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
            {course.category}
          </span>
          <div className="flex items-center gap-x-1 text-sm font-medium text-gray-900">
            <Icon.star />
            {course.rating}
          </div>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-gray-900">
          {course.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-gray-500">
          {course.description}
        </p>

        <div className="mt-3 flex items-center gap-x-4 text-xs text-gray-500">
          <span className="flex items-center gap-x-1">
            <Icon.book />
            {course.durationMonths} oy
          </span>
          <span className="flex items-center gap-x-1">
            <Icon.clock />
            {course.lessonsCount} dars
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            {course.oldPrice && (
              <span className="block text-xs text-gray-400 line-through">
                {course.oldPrice.toLocaleString("uz-UZ")} so'm
              </span>
            )}
            <span className="text-lg font-bold text-gray-900">
              {course.price.toLocaleString("uz-UZ")} so'm
            </span>
          </div>
          {course.id === "course-1" ? (
            <Link
              to="/courses/course-1"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Batafsil
            </Link>
          ) : (
            <span className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
              Batafsil
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
