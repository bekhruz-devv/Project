export interface Course {
  id: string;
  title: string;
  description: string;
  category:
    | "Frontend"
    | "Backend"
    | "Dizayn"
    | "Mobil"
    | "Data Science"
    | "Marketing"
    | "DevOps";
  level: "Boshlovchi" | "O'rtacha" | "Mutaxassis";
  rating: number;
  durationMonths: number;
  lessonsCount: number;
  price: number;
  oldPrice?: number;
  image: string;
}

export const categories: { label: Course["category"]; count: number }[] = [
  { label: "Frontend", count: 8 },
  { label: "Backend", count: 6 },
  { label: "Dizayn", count: 5 },
  { label: "Mobil", count: 4 },
  { label: "Data Science", count: 3 },
  { label: "Marketing", count: 4 },
  { label: "DevOps", count: 2 },
];

export const levels: Course["level"][] = [
  "Boshlovchi",
  "O'rtacha",
  "Mutaxassis",
];

export const courses: Course[] = [
  {
    id: "course-1",
    title: "JavaScript dasturlash",
    description:
      "ES6+, DOM, async/await va loyihalar bilan to'liq fullstack tayyorgarlik.",
    category: "Frontend",
    level: "Boshlovchi",
    rating: 4.9,
    durationMonths: 3,
    lessonsCount: 24,
    price: 490000,
    oldPrice: 690000,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
  },
  {
    id: "course-2",
    title: "React.js asoslari",
    description:
      "Komponent-asosli SPA, Hooks, Router, Redux va Next.js bilan ishlash.",
    category: "Frontend",
    level: "O'rtacha",
    rating: 4.8,
    durationMonths: 4,
    lessonsCount: 32,
    price: 790000,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
  },
  {
    id: "course-3",
    title: "UX/UI dizayn",
    description:
      "Figma, foydalanuvchi tadqiqi, wireframe, prototip va portfolio yaratish.",
    category: "Dizayn",
    level: "Boshlovchi",
    rating: 4.9,
    durationMonths: 5,
    lessonsCount: 40,
    price: 890000,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600",
  },
  {
    id: "course-4",
    title: "Python dasturchilik",
    description:
      "Python asoslari, OOP, Django, REST API va ma'lumotlar bazasi.",
    category: "Backend",
    level: "Boshlovchi",
    rating: 4.7,
    durationMonths: 6,
    lessonsCount: 48,
    price: 790000,
    oldPrice: 990000,
    image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=600",
  },
  {
    id: "course-5",
    title: "Flutter mobil ilovalar",
    description:
      "Dart tilida iOS va Android uchun cross-platform mobil ilovalar yaratish.",
    category: "Mobil",
    level: "O'rtacha",
    rating: 4.8,
    durationMonths: 5,
    lessonsCount: 36,
    price: 990000,
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600",
  },
  {
    id: "course-6",
    title: "Data Science va ML",
    description: "Pandas, NumPy, vizualizatsiya va Machine Learning asoslari.",
    category: "Data Science",
    level: "Mutaxassis",
    rating: 4.6,
    durationMonths: 6,
    lessonsCount: 50,
    price: 1200000,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
  },
  {
    id: "course-7",
    title: "DevOps muhandisi",
    description: "Linux, Docker, Kubernetes, CI/CD va bulut infratuzilmasi.",
    category: "DevOps",
    level: "Mutaxassis",
    rating: 4.7,
    durationMonths: 7,
    lessonsCount: 56,
    price: 1500000,
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600",
  },
  {
    id: "course-8",
    title: "Raqamli marketing",
    description:
      "SMM, kontent marketing, Google Ads, SEO va analitika asoslari.",
    category: "Marketing",
    level: "Boshlovchi",
    rating: 4.8,
    durationMonths: 3,
    lessonsCount: 28,
    price: 690000,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
  },
  {
    id: "course-9",
    title: "Node.js dasturlash",
    description:
      "Express.js, MongoDB, REST API va WebSocket bilan backend qurish.",
    category: "Backend",
    level: "O'rtacha",
    rating: 4.7,
    durationMonths: 5,
    lessonsCount: 40,
    price: 890000,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
  },
  {
    id: "course-10",
    title: "HTML & CSS asoslari",
    description:
      "Semantik HTML, zamonaviy CSS, Flexbox, Grid va responsive dizayn.",
    category: "Frontend",
    level: "Boshlovchi",
    rating: 4.9,
    durationMonths: 2,
    lessonsCount: 16,
    price: 390000,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600",
  },
  {
    id: "course-11",
    title: "Grafik dizayn",
    description:
      "Adobe Illustrator, Photoshop va brending. Logo va plakat yaratish.",
    category: "Dizayn",
    level: "O'rtacha",
    rating: 4.7,
    durationMonths: 4,
    lessonsCount: 32,
    price: 690000,
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600",
  },
  {
    id: "course-12",
    title: "TypeScript",
    description:
      "Tip xavfsizligi, generic, decorator va katta loyihalarda foydalanish.",
    category: "Frontend",
    level: "O'rtacha",
    rating: 4.8,
    durationMonths: 2,
    lessonsCount: 20,
    price: 590000,
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600",
  },
];
