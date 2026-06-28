import PricingHero from "../components/pricing/PricingHero";
import PricingPlans from "../components/pricing/PricingPlans";
import PricingDiscounts from "../components/pricing/PricingDiscounts";
import PricingComparisonTable from "../components/pricing/PricingComparisonTable";
import PricingCtaBanner from "../components/pricing/PricingCtaBanner";

const Pricing = () => {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <PricingDiscounts />
      <PricingComparisonTable />
      <PricingCtaBanner />
    </>
  );
};

export default Pricing;
