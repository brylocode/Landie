import Image from "next/image";

export default function FeaturesSectionItem() {
  return (
    <div>
      <Image
        src="/feature-icon.svg"
        alt="feature icon icon"
        width="36"
        height="36"
        className="mb-[14px]"
      />
      <h5 className="text-base text-gray-700 font-medium mb-[6px] mt-[14px]">
        Title Goes Here
      </h5>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor.{" "}
      </p>
    </div>
  );
}
