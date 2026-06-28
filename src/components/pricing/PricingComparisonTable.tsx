import { Icon } from "../ui/Icon";
import { comparisonRows } from "../../data/pricing.data";

const renderCell = (value: string | boolean) => {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex text-green-600">
        <Icon.check />
      </span>
    ) : (
      <span className="text-gray-300">—</span>
    );
  }
  return <span className="text-sm text-gray-700">{value}</span>;
};

const PricingComparisonTable = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Darajalarni taqqoslash
        </h2>
        <p className="mt-3 text-gray-500">
          Har bir daraja kurslarida nima borligini batafsil ko'ring.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-5xl overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold tracking-wide text-gray-500">
                IMKONIYAT
              </th>
              <th className="px-6 py-4 text-center text-xs font-semibold tracking-wide text-gray-500">
                BOSHLOVCHI
              </th>
              <th className="px-6 py-4 text-center text-xs font-semibold tracking-wide text-blue-600">
                MASHHUR
              </th>
              <th className="px-6 py-4 text-center text-xs font-semibold tracking-wide text-gray-500">
                KASBIY
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr
                key={row.label}
                className="border-b border-gray-100 last:border-0"
              >
                <td className="px-6 py-4 text-sm text-gray-700">{row.label}</td>
                <td className="px-6 py-4 text-center">
                  {renderCell(row.boshlovchi)}
                </td>
                <td className="px-6 py-4 text-center">
                  {renderCell(row.mashhur)}
                </td>
                <td className="px-6 py-4 text-center">
                  {renderCell(row.kasbiy)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PricingComparisonTable;
