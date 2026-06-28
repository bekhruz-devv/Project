import { useState } from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import PageHero from "../components/ui/PageHero";
import TeachersToolbar from "../components/teachers/TeachersToolbar";
import TeachersGrid from "../components/teachers/TeachersGrid";
import { allTeachers } from "../data/teachers.data";

const Teachers = () => {
  const [searchText, setSearchText] = useState("");
  const [activeFilter, setActiveFilter] = useState("Barchasi");

  const filteredTeachers = allTeachers.filter((teacher) => {
    const matchesSearch = teacher.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesFilter =
      activeFilter === "Barchasi" || teacher.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <PageHero
        breadcrumb="O'qituvchilar"
        title="Bizning o'qituvchilar"
        subtitle="42 ta tajribali mutaxassis o'z bilim va tajribasini siz bilan ulashishga tayyor."
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TeachersToolbar
            searchText={searchText}
            onSearchChange={setSearchText}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          <TeachersGrid teachers={filteredTeachers} />
        </div>
      </section>
    </div>
  );
};

export default Teachers;
