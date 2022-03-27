import Image from "next/image";
import FeaturesSectionItem from "./feature-section/FeaturesSectionItem";

export default function FeaturesSection() {
  return (
    <section className="flex flex-col desktop:flex-row items-center">
      <div className="desktop:w-1/2">
        <h2 className="text-2xl tablet:text-3xl text-gray-700 font-medium mb-2 tablet:mb-4">
          Light, Fast & Powerful
        </h2>
        <p className="text-base text-gray-600 mb-10 tablet:mb-20">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className="flex gap-[30px]">
          <FeaturesSectionItem />
          <FeaturesSectionItem />
        </div>
      </div>

      <div className="desktop:ml-8">
        <Image
          src="/mobile-women.svg"
          alt="women with mobile icon"
          width="540"
          height="525"
        />
      </div>
    </section>
  );
}
