const Hero = ({ children }) => {
  return (
    <div className="hero desktop:min-h-screen  mb-[10rem] desktop:mb-[20rem]">
      {children}
    </div>
  );
};

export default Hero;
