export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  isFeatured: boolean;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "boshlovchi",
    name: "Boshlovchi",
    description: "Noldan boshlovchilar uchun kurslar",
    price: 390000,
    isFeatured: false,
    features: [
      "Barcha video darslarga to'liq kirish",
      "Online chat orqali qo'llab-quvvatlash",
      "Uyga vazifalar tekshiruvi",
      "Video darslar arxivi",
      "Kurs sertifikati",
    ],
  },
  {
    id: "mashhur",
    name: "Mashhur",
    description: "Eng ko'p tanlanadigan kasbiy kurslar",
    price: 590000,
    isFeatured: true,
    features: [
      "Barcha video darslar + bonus materiallar",
      "Haftalik jonli online sessiyalar",
      "Shaxsiy mentor (haftada 1 soat, online)",
      "Portfolio loyihalari ustida ishlash",
      "Ishga joylashishda yordam",
      "Kurs sertifikati",
    ],
  },
  {
    id: "kasbiy",
    name: "Kasbiy",
    description: "Kasb egallash uchun to'liq dasturlar",
    price: 890000,
    isFeatured: false,
    features: [
      "Haftasiga 3 ta individual online dars",
      "Moslashuvchan dars jadvali",
      "Shaxsiy o'quv dasturi",
      "24/7 mentor bilan aloqa",
      "Ishga joylashishda yordam",
      "Kurs sertifikati",
    ],
  },
];

export interface DiscountItem {
  id: string;
  icon: "dollarSign" | "users" | "graduationCap" | "gift";
  percent: string;
  title: string;
  description: string;
}

export const discounts: DiscountItem[] = [
  {
    id: "discount-1",
    icon: "dollarSign",
    percent: "-15%",
    title: "Oldindan to'lov",
    description: "Kursning to'liq narxini bir martada to'lasangiz.",
  },
  {
    id: "discount-2",
    icon: "users",
    percent: "-10%",
    title: "Aka-uka va opa-singillar",
    description: "Bir oiladan ikki yoki undan ortiq talaba o'qisa.",
  },
  {
    id: "discount-3",
    icon: "graduationCap",
    percent: "-10%",
    title: "Talabalar uchun",
    description: "OTM talabasi ekanligizni tasdiqlovchi hujjat bilan.",
  },
  {
    id: "discount-4",
    icon: "gift",
    percent: "-5%",
    title: "Do'stingni olib kel",
    description: "Siz ham, do'stingiz ham birinchi oyga chegirma olasiz.",
  },
];

export interface ComparisonRow {
  label: string;
  boshlovchi: string | boolean;
  mashhur: string | boolean;
  kasbiy: string | boolean;
}

export const comparisonRows: ComparisonRow[] = [
  {
    label: "Jonli online sessiyalar",
    boshlovchi: false,
    mashhur: "Haftada 1",
    kasbiy: "Haftada 3 (shaxsiy)",
  },
  {
    label: "Mentor qo'llab-quvvatlovi",
    boshlovchi: "Chat",
    mashhur: "Shaxsiy mentor",
    kasbiy: "24/7 yakkama-yakka",
  },
  {
    label: "Video darslar arxivi",
    boshlovchi: true,
    mashhur: true,
    kasbiy: true,
  },
  { label: "Shaxsiy mentor", boshlovchi: false, mashhur: true, kasbiy: true },
  {
    label: "Portfolio loyihalari",
    boshlovchi: false,
    mashhur: true,
    kasbiy: true,
  },
  {
    label: "Ishga joylashishda yordam",
    boshlovchi: false,
    mashhur: true,
    kasbiy: true,
  },
  {
    label: "Moslashuvchan jadval",
    boshlovchi: false,
    mashhur: false,
    kasbiy: true,
  },
  { label: "Sertifikat", boshlovchi: true, mashhur: true, kasbiy: true },
];
