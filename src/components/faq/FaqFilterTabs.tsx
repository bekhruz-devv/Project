import { useState } from "react";
import { faqFilterTabs } from "../../data/faq.data";

const FaqFilterTabs = () => {
  const [activeTab, setActiveTab] = useState(faqFilterTabs[0]);

  return (
    <div className="mx-auto flex max-w-3xl flex-wrap gap-x-1 rounded-xl bg-gray-100 p-1.5">
      {faqFilterTabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === tab
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FaqFilterTabs;
