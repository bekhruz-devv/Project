import { useState } from "react";
import { courseDetailData } from "../data/courseDetail.data";
import CourseDetailHero from "../components/course-detail/CourseDetailHero";
import CourseDetailTabs from "../components/course-detail/CourseDetailTabs";
import CourseDetailContent from "../components/course-detail/CourseDetailContent";
import CourseDetailSidebar from "../components/course-detail/CourseDetailSidebar";
import SimilarCourses from "../components/course-detail/SimilarCourses";

const CourseDetail = () => {
  const [activeTab, setActiveTab] = useState("Tavsif");
  const course = courseDetailData;

  return (
    <>
      <CourseDetailHero course={course} />
      <CourseDetailTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        reviewsCount={course.reviewsCount}
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            {activeTab === "Tavsif" && <CourseDetailContent course={course} />}
            {activeTab === "Dastur" && (
              <p className="text-gray-500">
                Dastur bo'limi tez kunda qo'shiladi.
              </p>
            )}
            {activeTab === "O'qituvchi" && (
              <p className="text-gray-500">
                {course.instructor.name} — {course.instructor.title}
              </p>
            )}
            {activeTab === "Sharhlar" && (
              <p className="text-gray-500">
                Sharhlar bo'limi tez kunda qo'shiladi.
              </p>
            )}
          </div>

          <CourseDetailSidebar course={course} />
        </div>
      </div>

      <SimilarCourses />
    </>
  );
};

export default CourseDetail;
