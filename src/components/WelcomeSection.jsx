import Button from "./ui/Button";

const WelcomeSection = () => {
  return (
    <div className="container">
      <section className=" mt-8 desktop:w-1/2 desktop:mt-[248px]">
        <h1 className="text-3xl desktop:text-4xl mb-5 text-gray-700 font-medium">
          Introduce Your Product <p>Quickly & Effectively</p>
        </h1>
        <p className="text-xl text-blue-500">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className=" mt-12 flex flex-wrap gap-x-6 gap-y-2">
          <Button size="xl" wide className="w-full tablet:w-auto">
            Purchase UI Kit
          </Button>
          <Button size="xl" outline wide className="w-full tablet:w-auto">
            Learn More
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WelcomeSection;
