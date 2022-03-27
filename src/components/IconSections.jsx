import Image from "next/image";
import IconSection from "./icon-section/IconSection";
import IconSectionTitle from "./icon-section/IconSectionTitle";
import IconSectionDescription from "./icon-section/IconSectionDescription";
import IconSectionContent from "./icon-section/IconSectionContent";

export default function IconSections() {
  return (
    <div className="mt-40 desktop:mt-[228px]">
      <IconSection className="mb-20 desktop:mb-[222px]">
        <IconSectionContent>
          <IconSectionTitle>Light, Fast & Powerful</IconSectionTitle>
          <IconSectionDescription>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </IconSectionDescription>
        </IconSectionContent>
        <Image
          src="/lotos-women.svg"
          alt="section icon"
          width="480"
          height="317"
        />
      </IconSection>

      <IconSection className="mb-20 desktop:mb-[222px]">
        <IconSectionContent>
          <IconSectionTitle>Light, Fast & Powerful</IconSectionTitle>
          <IconSectionDescription>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </IconSectionDescription>
        </IconSectionContent>
        <Image
          src="/tree-mobile-persons.svg"
          alt="section icon"
          width="480"
          height="317"
        />
      </IconSection>

      <IconSection>
        <IconSectionContent>
          <IconSectionTitle>Light, Fast & Powerful</IconSectionTitle>
          <IconSectionDescription>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </IconSectionDescription>
        </IconSectionContent>
        <Image
          src="/at-lotos-women.svg"
          alt="section icon"
          width="480"
          height="317"
        />
      </IconSection>
    </div>
  );
}
