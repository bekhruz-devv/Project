import { Link } from "react-router-dom";
import { Icon } from "../ui/Icon";
import { pricingPlans } from "../../data/pricing.data";

const PricingPlans = () => {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-2xl border bg-white p-7 ${
              plan.isFeatured ? "border-2 border-blue-600" : "border-gray-200"
            }`}
          >
            {plan.isFeatured && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                Eng mashhur
              </span>
            )}

            <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{plan.description}</p>

            <div className="mt-5 flex items-baseline gap-x-1.5">
              <span className="text-3xl font-bold text-gray-900">
                {plan.price.toLocaleString("uz-UZ")}
              </span>
              <span className="text-sm text-gray-500">so'mdan</span>
            </div>

            <ul className="mt-6 space-y-3 border-t border-gray-100 pt-6">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-x-2.5 text-sm text-gray-700"
                >
                  <span className="mt-0.5 text-green-600">
                    <Icon.check />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              to="/courses"
              className={`mt-7 block rounded-lg py-2.5 text-center text-sm font-medium transition-colors ${
                plan.isFeatured
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border border-gray-200 text-gray-900 hover:bg-gray-50"
              }`}
            >
              Kurslarni ko'rish
            </Link>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray-500">
        Har bir kurs alohida sotib olinadi —{" "}
        <span className="font-medium text-gray-700">
          bir martalik to'lov, umrbod kirish
        </span>
        . Narxlar darajaga qarab boshlang'ich qiymatdan; aniq narx kurs
        sahifasida ko'rsatilgan.
      </p>
    </section>
  );
};

export default PricingPlans;
