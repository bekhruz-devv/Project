import { Icon } from "../ui/Icon";
import { discounts } from "../../data/pricing.data";

const PricingDiscounts = () => {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <span className="text-xs font-semibold tracking-wide text-blue-600">
          CHEGIRMALAR
        </span>
        <h2 className="mt-2 text-3xl font-bold text-gray-900">
          Kamroq to'lash yo'llari
        </h2>
        <p className="mt-3 text-gray-500">
          Chegirmalar bir-biri bilan qo'shilmaydi — eng kattasi qo'llanadi.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {discounts.map((item) => {
            const IconComponent = Icon[item.icon];

            return (
              <div
                key={item.id}
                className="rounded-xl border border-gray-200 bg-white p-6 text-left"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <IconComponent />
                </span>
                <p className="mt-4 text-2xl font-bold text-green-600">
                  {item.percent}
                </p>
                <h3 className="mt-1 font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingDiscounts;
