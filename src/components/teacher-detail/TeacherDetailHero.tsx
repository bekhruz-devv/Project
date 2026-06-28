import { Link } from "react-router-dom";
import { Icon } from "../ui/Icon";
import type { TeacherDetail } from "../../data/teacherDetail.data";

interface TeacherDetailHeroProps {
  teacher: TeacherDetail;
}

const TeacherDetailHero = ({ teacher }: TeacherDetailHeroProps) => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-x-1.5 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-700">
            Bosh sahifa
          </Link>
          <span>›</span>
          <Link to="/teachers" className="hover:text-gray-700">
            O'qituvchilar
          </Link>
          <span>›</span>
          <span className="font-medium text-gray-900">{teacher.name}</span>
        </div>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
          <img
            src={teacher.avatar}
            alt={teacher.name}
            className="h-28 w-28 shrink-0 rounded-full border-4 border-white object-cover shadow-md"
          />

          <div>
            <span className="text-xs font-semibold tracking-wide text-blue-600">
              {teacher.title.toUpperCase()}
            </span>
            <h1 className="mt-1 text-3xl font-bold text-gray-900 sm:text-4xl">
              {teacher.name}
            </h1>
            <p className="mt-3 max-w-2xl text-gray-600">{teacher.bio}</p>

            <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-2">
              <div>
                <p className="text-xl font-bold text-gray-900">
                  {teacher.coursesCount}
                </p>
                <p className="text-xs text-gray-500">Kurs</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">
                  {teacher.studentsCount}
                </p>
                <p className="text-xs text-gray-500">Talaba</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">
                  {teacher.rating}
                </p>
                <p className="text-xs text-gray-500">Reyting</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">
                  {teacher.experienceYears} yil
                </p>
                <p className="text-xs text-gray-500">Tajriba</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                Darsga yozilish
              </button>
              <button className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900">
                Savol berish
              </button>

              <div className="flex items-center gap-x-2">
                {teacher.socials.telegram && (
                  <a
                    href={teacher.socials.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-gray-700"
                  >
                    <Icon.telegram />
                  </a>
                )}
                {teacher.socials.linkedin && (
                  <a
                    href={teacher.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-gray-700"
                  >
                    <Icon.linkedin />
                  </a>
                )}
                {teacher.socials.github && (
                  <a
                    href={teacher.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-gray-700"
                  >
                    <Icon.github />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherDetailHero;
