import { teachers } from "../../data/home.data";
import TeacherCard from "../ui/TeacherCard";

const OtherTeachers = () => {
  const others = teachers.filter((t) => t.name !== "Akmal Karimov").slice(0, 3);

  return (
    <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-gray-900">
          Boshqa o'qituvchilar
        </h2>
        <p className="mt-1.5 text-gray-500">
          Jamoamizning boshqa mutaxassislari bilan ham tanishing.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {others.map((teacher) => (
            <TeacherCard key={teacher.name} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherTeachers;
