import FaqHero from "../components/faq/FaqHero";
import FaqFilterTabs from "../components/faq/FaqFilterTabs";
import FaqAccordion from "../components/faq/FaqAccordion";
import FaqContactCard from "../components/faq/FaqContactCard";

const Faq = () => {
  return (
    <div className="space-y-10 pb-16">
      <FaqHero />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FaqFilterTabs />
      </div>
      <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
        <FaqAccordion />
        <FaqContactCard />
      </div>
    </div>
  );
};

export default Faq;
