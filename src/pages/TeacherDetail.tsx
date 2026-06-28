import { useState } from "react";
import { teacherDetailData } from "../data/teacherDetail.data";
import TeacherDetailHero from "../components/teacher-detail/TeacherDetailHero";
import TeacherDetailTabs from "../components/teacher-detail/TeacherDetailTabs";
import TeacherDetailContent from "../components/teacher-detail/TeacherDetailContent";
import TeacherDetailSidebar from "../components/teacher-detail/TeacherDetailSidebar";
import OtherTeachers from "../components/teacher-detail/OtherTeachers";

const TeacherDetail = () => {
  const [activeTab, setActiveTab] = useState("Haqida");
  const teacher = teacherDetailData;

  return (
    <>
      <TeacherDetailHero teacher={teacher} />
      <TeacherDetailTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        coursesCount={teacher.coursesCount}
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            {activeTab === "Haqida" && (
              <TeacherDetailContent teacher={teacher} />
            )}
            {activeTab === "Kurslari" && (
              <p className="text-gray-500">
                Kurslar bo'limi tez kunda qo'shiladi.
              </p>
            )}
            {activeTab === "Sharhlar" && (
              <p className="text-gray-500">
                Sharhlar bo'limi tez kunda qo'shiladi.
              </p>
            )}
          </div>

          <TeacherDetailSidebar teacher={teacher} />
        </div>
      </div>

      <OtherTeachers />
    </>
  );
};

export default TeacherDetail;
