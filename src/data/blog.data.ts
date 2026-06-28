export interface BlogPost {
  id: string;
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  authorName: string;
  authorAvatar: string;
}

export const blogCategories: { label: string; count: number }[] = [
  { label: "Frontend", count: 24 },
  { label: "Backend", count: 18 },
  { label: "Dizayn", count: 15 },
  { label: "Mobil", count: 12 },
  { label: "Data Science", count: 9 },
  { label: "Marketing", count: 11 },
  { label: "DevOps", count: 6 },
  { label: "Karyera", count: 14 },
];

export const popularPosts: { image: string; title: string; views: string }[] = [
  {
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100",
    title: "JavaScript'da 5 ta keng tarqalgan xato",
    views: "1.2k o'qildi",
  },
  {
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=100",
    title: "Figma'da ishlashni boshqa bo'yicha qo'llanma",
    views: "980 o'qildi",
  },
  {
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=100",
    title: "TypeScript'ni nima uchun o'rganish kerak?",
    views: "850 o'qildi",
  },
  {
    image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=100",
    title: "Python'da REST API yaratish 10 daqiqada",
    views: "720 o'qildi",
  },
];

export const popularTags: string[] = [
  "JavaScript",
  "React",
  "CSS",
  "Python",
  "Figma",
  "HTML",
  "Flutter",
  "Karyera",
  "ML",
  "Git",
  "Tipix",
  "Docker",
];

export const featuredPost: BlogPost = {
  id: "post-1",
  image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800",
  category: "Karyera",
  date: "15-may, 2026",
  title: "2026-yilda dasturchilik karyerasini qanday boshlash kerak?",
  description:
    "Sohaga endi qadam tashlayotganlarga atroflicha qo'llanma. Qaysi yo'nalishni tanlash, qancha vaqt ketadi va birinchi ishga qanday tayyorlanish bo'yicha amaliy tavsiyalar.",
  authorName: "Akmal Karimov",
  authorAvatar: "https://i.pravatar.cc/100?img=12",
};

export const blogPosts: BlogPost[] = [
  {
    id: "post-2",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
    category: "Frontend",
    date: "10-may",
    title: "React 19'dagi yangi xususiyatlar",
    description:
      "React 19 muhim yangiliklari: Server Components, Actions va concurrent rendering yaxshilanishlari.",
    authorName: "Nodira Yusupova",
    authorAvatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    id: "post-3",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600",
    category: "Dizayn",
    date: "8-may",
    title: "UX/UI dizaynda 10 ta keng tarqalgan xato",
    description:
      "Yangi dizaynerlar yo'l qo'yadigan asosiy xatolar va ularni qanday tuzatish kerakligi haqida.",
    authorName: "Madina Ergasheva",
    authorAvatar: "https://i.pravatar.cc/100?img=45",
  },
  {
    id: "post-4",
    image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=600",
    category: "Backend",
    date: "5-may",
    title: "Django vs Flask: qaysi birini tanlash?",
    description:
      "Ikki ommabop Python framework'ini taqqoslash. Qaysi loyiha uchun qaysi biri mos keladi.",
    authorName: "Sherzod Rahimov",
    authorAvatar: "https://i.pravatar.cc/100?img=33",
  },
  {
    id: "post-5",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600",
    category: "Mobil",
    date: "2-may",
    title: "Flutter bilan birinchi ilovani 1 kunda yaratish",
    description:
      "Boshlovchilar uchun Flutter qo'llanmasi. Sozlash, asoslar va birinchi ilovani yaratish.",
    authorName: "Otabek Salimov",
    authorAvatar: "https://i.pravatar.cc/100?img=14",
  },
  {
    id: "post-6",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    category: "Data Science",
    date: "28-aprel",
    title: "Machine Learning'ga nimadan boshlash kerak?",
    description:
      "ML olamiga kirishni rejalashtirayotganlar uchun yo'l xaritasi va resurslar.",
    authorName: "Sevara Tursunova",
    authorAvatar: "https://i.pravatar.cc/100?img=26",
  },
  {
    id: "post-7",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
    category: "Marketing",
    date: "25-aprel",
    title: "SEO 2026: nima o'zgardi?",
    description:
      "Google'ning oxirgi algoritm o'zgarishlari va saytni qanday optimizatsiya qilish.",
    authorName: "Diloraxon Nazarova",
    authorAvatar: "https://i.pravatar.cc/100?img=31",
  },
  {
    id: "post-8",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600",
    category: "DevOps",
    date: "22-aprel",
    title: "Docker bilan ishlashning 5 ta yaxshi amaliyoti",
    description:
      "Container'lar bilan ishlashda tez-tez qilinadigan xatolardan qanday saqlanish.",
    authorName: "Jasur Mahmudov",
    authorAvatar: "https://i.pravatar.cc/150?img=53",
  },
  {
    id: "post-9",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600",
    category: "Frontend",
    date: "18-aprel",
    title: "CSS Grid yoki Flexbox — qaysi birini ishlatish?",
    description:
      "Ikki ommabop layout texnologiyasi taqqosi va amaliy misollar.",
    authorName: "Akmal Karimov",
    authorAvatar: "https://i.pravatar.cc/100?img=12",
  },
];
