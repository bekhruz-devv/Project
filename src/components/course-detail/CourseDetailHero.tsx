import { Link, useParams } from "react-router-dom";
import { Icon } from "../ui/Icon";
import { courses } from "../../data/courses.data";

const CourseDetailHero = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) return null;

  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-600 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_380px]">
        <div className="text-white">
          <div className="flex items-center gap-x-1.5 text-sm text-white/70">
            <Link to="/" className="hover:text-white">
              Bosh sahifa
            </Link>
            <span>›</span>
            <Link to="/courses" className="hover:text-white">
              Kurslar
            </Link>
            <span>›</span>
            <span className="font-medium text-white">{course.title}</span>
          </div>

          <div className="mt-6 flex items-center gap-x-2">
            <span className="rounded-md bg-white/15 px-2.5 py-1 text-xs font-medium text-white">
              {course.category}
            </span>
            <span className="rounded-md bg-green-500/90 px-2.5 py-1 text-xs font-medium text-white">
              {course.level}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            {course.title}
          </h1>
          <p className="mt-3 max-w-xl text-white/80">{course.description}</p>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
            <span className="flex items-center gap-x-1.5">
              <span className="text-yellow-400">
                <Icon.star />
              </span>
              {course.rating} ({course.reviewsCount} sharh)
            </span>
            <span className="flex items-center gap-x-1.5">
              <Icon.users />
              {course.studentsCount} talaba
            </span>
            <span className="flex items-center gap-x-1.5">
              <Icon.book />
              {course.durationMonths} oy davom etadi
            </span>
            <span className="flex items-center gap-x-1.5">
              <Icon.location />
              {course.language}
            </span>
          </div>

          <div className="mt-6 flex items-center gap-x-3 border-t border-white/20 pt-6">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-xs text-white/60">O'qituvchi</p>
              <p className="text-sm font-medium">
                {course.instructor.name} — {course.instructor.title}
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          <img
            src={course.image}
            alt={course.title}
            className="h-48 w-full object-cover"
          />
          <div className="p-6">
            <div className="flex items-baseline gap-x-2">
              <span className="text-2xl font-bold text-gray-900">
                {course.price.toLocaleString("uz-UZ")} so'm
              </span>
              {course.oldPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {course.oldPrice.toLocaleString("uz-UZ")} so'm
                </span>
              )}
            </div>

            <ul className="mt-5 space-y-2.5 border-t border-gray-100 pt-5">
              {course.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-x-2.5 text-sm text-gray-700"
                >
                  <span className="text-green-600">
                    <Icon.check />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700">
              Ro'yxatdan o'tish
            </button>
            <button className="mt-3 w-full rounded-lg border border-gray-200 py-3 text-sm font-medium text-gray-900">
              Bepul konsultatsiya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailHero;
