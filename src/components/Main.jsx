import FeaturesSection from "./FeaturesSection";
import IconSections from "./IconSections";
import PricingSection from "./PricingSection";

const Main = () => {
  return (
    <main>
      <div className="container">
        <FeaturesSection />
        <IconSections />
      </div>
      <PricingSection />
    </main>
  );
};

export default Main;
