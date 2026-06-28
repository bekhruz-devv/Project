import { Icon } from "../ui/Icon";
import type { Course } from "../../data/courses.data";

interface CourseDetailContentProps {
  course: Course;
}

const CourseDetailContent = ({ course }: CourseDetailContentProps) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Kurs haqida</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-600">
          {course.aboutText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900">
          Nimalarni o'rganasiz?
        </h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {course.whatYouLearn.map((item) => (
            <div
              key={item}
              className="flex items-start gap-x-2.5 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-700"
            >
              <span className="mt-0.5 text-green-600">
                <Icon.check />
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900">Kim uchun?</h3>
        <ul className="mt-4 space-y-2">
          {course.whoIsItFor.map((item) => (
            <li
              key={item}
              className="flex items-start gap-x-2.5 text-sm text-gray-600"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetailContent;
