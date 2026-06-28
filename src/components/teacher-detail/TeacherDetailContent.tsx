import type { TeacherDetail } from "../../data/teacherDetail.data";

interface TeacherDetailContentProps {
  teacher: TeacherDetail;
}

const TeacherDetailContent = ({ teacher }: TeacherDetailContentProps) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">O'qituvchi haqida</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-600">
          {teacher.aboutText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900">Ko'nikmalar</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {teacher.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900">Ish tajribasi</h3>
        <div className="mt-4 space-y-6 border-l-2 border-gray-100 pl-6">
          {teacher.experience.map((item) => (
            <div key={item.title} className="relative">
              <span
                className={`absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full ${
                  item.isCurrent ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
              <p className="text-sm font-medium text-blue-600">{item.years}</p>
              <h4 className="mt-0.5 font-semibold text-gray-900">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500">{item.company}</p>
              <p className="mt-1.5 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherDetailContent;
