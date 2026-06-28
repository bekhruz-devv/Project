import { useState } from "react";

const tabs = ["Tavsif", "Dastur", "O'qituvchi", "Sharhlar"];

interface CourseDetailTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  reviewsCount: number;
}

const CourseDetailTabs = ({
  activeTab,
  onTabChange,
  reviewsCount,
}: CourseDetailTabsProps) => {
  return (
    <div className="border-b border-gray-200">
      <div className="mx-auto flex max-w-6xl gap-x-8 px-4 sm:px-6 lg:px-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`border-b-2 py-4 text-sm font-medium transition-colors ${
              activeTab === tab
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab === "Sharhlar" ? `${tab} (${reviewsCount})` : tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseDetailTabs;
