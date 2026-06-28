export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqFilterTabs: string[] = [
  "Umumiy",
  "Kurslar va darslar",
  "To'lov",
  "Sertifikat",
];

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "O'qish uchun oldindan bilim kerakmi?",
    answer:
      "Yo'q. Boshlovchi kurslarimiz nolinchi darajadan mo'ljallangan — kompyuterda ishlashning oddiy ko'nikmalari yetarli. O'rta va yuqori darajadagi kurslar uchun esa kirish testi o'tkazamiz va sizga mos kursni tavsiya qilamiz.",
  },
  {
    id: "faq-2",
    question: "Yosh chegarasi bormi?",
    answer:
      "Yo'q, kurslarimiz har qanday yoshdagi o'quvchilar uchun ochiq. Faqat ba'zi kurslar uchun minimal bilim darajasi talab qilinishi mumkin.",
  },
  {
    id: "faq-3",
    question: "Darslar qanday formatda o'tadi?",
    answer:
      "Darslar onlayn formatda, video darslar va jonli efirlar orqali olib boriladi. Har bir dars yozib olinadi, shuning uchun istalgan vaqtda qayta ko'rishingiz mumkin.",
  },
  {
    id: "faq-4",
    question: "O'z sur'atimda o'qiy olamanmi?",
    answer:
      "Ha, kurslarning ko'pchiligi o'z sur'atingizda o'qish imkonini beradi. Siz darslarni o'zingizga qulay vaqtda ko'rib, mashqlarni bajarishingiz mumkin.",
  },
  {
    id: "faq-5",
    question: "Bepul demo darslar bormi?",
    answer:
      "Ha, har bir kurs bo'yicha bepul demo darslar mavjud. Ular orqali kursning sifati va o'qitish uslubi bilan tanishib olishingiz mumkin.",
  },
];
