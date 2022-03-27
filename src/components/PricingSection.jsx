import PricingDecorator from "./pricing/PricingDecorator";
import Button from "./ui/Button";

const Price = ({ value, description }) => (
  <div className="flex flex-col justify-center mb-[60px]">
    <span className="text-4xl text-blue-700 font-medium">{`$${value}`}</span>
    <span className="text-base text-blue-600">{description}</span>
  </div>
);

export default function PricingSection() {
  return (
    <>
      <PricingDecorator />
      <section className="bg-blue-100/50">
        <div className="container">
          <div className="flex flex-col items-center max-w-[37.5rem] mx-auto py-20 desktop:pb-[172px]">
            <h2 className="text-3xl mb-2 tablet:mb-4 text-gray-700 font-medium text-center">
              A Price To Suit Everyone
            </h2>
            <p className="text-base text-gray-600 text-center mb-[36px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
            </p>
            <Price value={40} description="UI Design Kit" />
            <p className=" text-md text-gray-600 mb-[9px] ">
              See, One price. Simple.
            </p>
            <Button size="xl" wide>
              Purchase Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
