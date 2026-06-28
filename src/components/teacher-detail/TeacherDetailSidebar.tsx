import { Icon } from "../ui/Icon";
import type { TeacherDetail } from "../../data/teacherDetail.data";

interface TeacherDetailSidebarProps {
  teacher: TeacherDetail;
}

const TeacherDetailSidebar = ({ teacher }: TeacherDetailSidebarProps) => {
  return (
    <aside className="space-y-5">
      <div className="rounded-xl border border-gray-200 p-5">
        <h4 className="font-semibold text-gray-900">Sertifikatlar</h4>
        <div className="mt-4 space-y-4">
          {teacher.certificates.map((cert) => (
            <div key={cert.title} className="flex items-start gap-x-3">
              <span className="mt-0.5 text-amber-500">
                <Icon.award />
              </span>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {cert.title}
                </p>
                <p className="text-xs text-gray-500">
                  {cert.issuer}, {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 p-5">
        <h4 className="font-semibold text-gray-900">Dars beradigan vaqtlari</h4>
        <div className="mt-4 space-y-3">
          {teacher.schedule.map((item) => (
            <div
              key={item.days}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-gray-600">{item.days}</span>
              <span className="font-medium text-gray-900">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
        <h4 className="font-semibold text-gray-900">
          {teacher.name.split(" ")[0]} bilan o'qishni boshlang
        </h4>
        <p className="mt-2 text-sm text-gray-600">
          Yangi guruh {teacher.nextGroupDate} kuni boshlanadi. Joylar soni
          cheklangan.
        </p>
        <button className="mt-4 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
          Kursga yozilish
        </button>
      </div>
    </aside>
  );
};

export default TeacherDetailSidebar;
