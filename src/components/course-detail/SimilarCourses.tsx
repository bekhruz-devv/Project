import { courses } from "../../data/courses.data";
import CourseCard from "../courses/CourseCard";

interface SimilarCoursesProps {
  currentCourseId: string;
  category: string;
}

const SimilarCourses = ({ currentCourseId, category }: SimilarCoursesProps) => {
  const similar = courses
    .filter((c) => c.id !== currentCourseId && c.category === category)
    .slice(0, 4);

  const fallback = courses.filter((c) => c.id !== currentCourseId).slice(0, 4);

  const list = similar.length > 0 ? similar : fallback;

  return (
    <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-gray-900">O'xshash kurslar</h2>
        <p className="mt-1.5 text-gray-500">
          Bu kursni o'rganganlar quyidagilarni ham yoqtirdi.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarCourses;
