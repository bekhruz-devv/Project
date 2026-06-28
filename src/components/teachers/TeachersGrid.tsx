import { Icon } from "../ui/Icon";
import TeacherCard from "../ui/TeacherCard";
import type { Teacher } from "../../types/home.type";

const pages = ["1", "2", "3"];

interface TeachersGridProps {
  teachers: Teacher[];
}

const TeachersGrid = ({ teachers }: TeachersGridProps) => {
  return (
    <div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.name} teacher={teacher} />
        ))}
      </div>

      {teachers.length === 0 && (
        <p className="mt-10 text-center text-gray-500">
          Hech qanday o'qituvchi topilmadi.
        </p>
      )}

      <div className="mt-12 flex items-center justify-center gap-x-2">
        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-400 hover:text-gray-700">
          <Icon.arrowLeft />
        </button>
        {pages.map((page, index) => (
          <button
            key={page}
            className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
              index === 0
                ? "bg-blue-600 text-white"
                : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            {page}
          </button>
        ))}
        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-400 hover:text-gray-700">
          <Icon.arrowRight />
        </button>
      </div>
    </div>
  );
};

export default TeachersGrid;
