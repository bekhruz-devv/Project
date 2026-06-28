import { courses } from "../../data/courses.data";
import CourseCard from "../courses/CourseCard";

const SimilarCourses = () => {
  const similar = courses.filter((c) => c.id !== "course-1").slice(0, 4);

  return (
    <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-gray-900">O'xshash kurslar</h2>
        <p className="mt-1.5 text-gray-500">
          Bu kursni o'rganganlar quyidagilarni ham yoqtirdi.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {similar.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarCourses;
