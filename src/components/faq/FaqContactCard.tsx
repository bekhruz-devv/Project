const FaqContactCard = () => {
  return (
    <div className="mx-auto max-w-3xl rounded-2xl bg-blue-50 px-6 py-12 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
            stroke="#2563eb"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h3 className="mt-4 text-xl font-bold text-gray-900">
        Javob topa olmadingizmi?
      </h3>
      <p className="mt-2 text-sm text-gray-500">
        Bizga yozing yoki qo'ng'iroq qiling — har qanday savolingizga javob
        beramiz.
      </p>

      <div className="mt-6 flex items-center justify-center gap-x-3">
        <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
          Xabar yozish
        </button>
        <a
          href="tel:+998711234567"
          className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900"
        >
          +998 71 123 45 67
        </a>
      </div>
    </div>
  );
};

export default FaqContactCard;
