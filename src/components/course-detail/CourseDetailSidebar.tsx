import type { CourseDetail } from "../../data/courseDetail.data";

interface CourseDetailSidebarProps {
  course: CourseDetail;
}

const CourseDetailSidebar = ({ course }: CourseDetailSidebarProps) => {
  return (
    <aside className="space-y-5">
      <div className="rounded-xl border border-gray-200 p-5">
        <h4 className="text-xs font-semibold tracking-wide text-gray-500">
          TALAB QILINADIGAN KO'NIKMALAR
        </h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {course.requiredSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 p-5">
        <h4 className="text-xs font-semibold tracking-wide text-gray-500">
          KURS MA'LUMOTLARI
        </h4>
        <dl className="mt-3 space-y-2.5 text-sm">
          <div className="flex items-center justify-between">
            <dt className="text-gray-500">Format</dt>
            <dd className="font-medium text-gray-900">{course.format}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-gray-500">Boshlanish</dt>
            <dd className="font-medium text-blue-600">{course.startDate}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-gray-500">Kirish</dt>
            <dd className="font-medium text-gray-900">{course.access}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-gray-500">Daraja</dt>
            <dd className="font-medium text-gray-900">{course.level}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-gray-500">Sertifikat</dt>
            <dd className="font-medium text-gray-900">
              {course.hasCertificate ? "Ha" : "Yo'q"}
            </dd>
          </div>
        </dl>

        <button className="mt-5 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
          Hoziroq boshlash
        </button>
      </div>
    </aside>
  );
};

export default CourseDetailSidebar;
