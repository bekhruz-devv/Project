export const teacherDetailData = {
  id: "akmal-karimov",
  name: "Akmal Karimov",
  title: "JavaScript Lead",
  avatar: "https://i.pravatar.cc/200?img=12",
  bio: "8 yillik frontend tajriba. EPAM Systems va Uzcard kompaniyalarida ishlagan, hozir O'quv Markazda JavaScript yo'nalishini boshqaradi. AWS sertifikatlangan dasturchi.",
  coursesCount: 12,
  studentsCount: "540+",
  rating: 4.9,
  experienceYears: 8,
  aboutText: [
    "Akmal Karimov — frontend dasturlash bo'yicha 8 yillik amaliy tajribaga ega mutaxassis. Karyerasini 2018-yilda EPAM Systems kompaniyasida boshlagan, keyinchalik Uzcard'da to'lov tizimlari uchun yirik frontend ilovalarni ishlab chiqqan.",
    "2022-yildan beri O'quv Markazda JavaScript yo'nalishini boshqaradi. Uning darslari amaliyotga asoslangan: har bir mavzu real loyiha misolida tushuntiriladi. Bitiruvchilarining 78%i kurs tugagach 3 oy ichida ishga joylashgan.",
  ],
  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Node.js",
    "Git",
    "Webpack / Vite",
    "Testing (Jest)",
  ],
  experience: [
    {
      years: "2022 — hozir",
      title: "JavaScript Lead",
      company: "O'quv Markaz, Toshkent",
      description:
        "JavaScript yo'nalishi rahbari. 12 ta kurs muallifi, o'quv dasturlarini ishlab chiqish va yangi o'qituvchilarni tayyorlash.",
      isCurrent: true,
    },
    {
      years: "2020 — 2022",
      title: "Senior Frontend Developer",
      company: "Uzcard, Toshkent",
      description:
        "To'lov tizimlari uchun web ilovalar. React + TypeScript stack, 1 mln+ foydalanuvchili mahsulotlar.",
      isCurrent: false,
    },
    {
      years: "2018 — 2020",
      title: "Frontend Developer",
      company: "EPAM Systems",
      description:
        "Xalqaro fintech loyihalarida frontend ishlab chiqish, kod sifati bo'yicha mentorlik.",
      isCurrent: false,
    },
  ],
  certificates: [
    { title: "AWS Certified Developer", issuer: "Amazon", year: "2024" },
    { title: "Meta Frontend Developer", issuer: "Coursera", year: "2023" },
    { title: "Pedagogika asoslari", issuer: "TDPU", year: "2022" },
  ],
  schedule: [
    { days: "Du / Chor / Ju", time: "18:00 — 20:00" },
    { days: "Sesh / Pay", time: "14:00 — 16:00" },
    { days: "Shanba", time: "10:00 — 13:00" },
  ],
  nextGroupDate: "1-iyul",
  socials: {
    telegram: "https://t.me/akmalkarimov",
    linkedin: "https://linkedin.com/in/akmalkarimov",
    github: "https://github.com/akmalkarimov",
  },
};

export type TeacherDetail = typeof teacherDetailData;
