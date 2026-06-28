import { Link } from "react-router-dom";

const PricingCtaBanner = () => {
  return (
    <section className="bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-2xl bg-blue-50 px-8 py-8 sm:flex-row">
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Qaysi kursni tanlashni bilmayapsizmi?
          </h3>
          <p className="mt-1.5 text-sm text-gray-500">
            Bepul demo darslarni oching — mentor uslubi va dastur bilan
            tanishib, o'zingizga mos kursni tanlaysiz.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-x-3">
          <Link
            to="/courses"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Bepul demo darslar
          </Link>
          <Link
            to="/contact"
            className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900"
          >
            Konsultatsiya olish
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingCtaBanner;
