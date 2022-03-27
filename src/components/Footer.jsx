import FooterLinks from "./footer/FooterLinks";
import FooterSeparator from "./footer/FooterSeparator";
import FooterSocialIcons from "./footer/FooterSocialIcons";
import Button from "./ui/Button";
import Logo from "./ui/Logo";

const Footer = () => {
  return (
    <footer className="pt-10 pb-5 tablet:py-[60px] bg-blue-100">
      <div className="container">
        <div className="flex flex-col items-center tablet:flex-row tablet:justify-between">
          <span className="tablet:order-2 tablet:w-1/3 flex justify-center">
            <Logo />
          </span>
          <span className="tablet:order-3 hidden tablet:w-1/3 tablet:flex justify-end">
            <Button size="sm">Purchase now</Button>
          </span>
          <span className="text-md text-gray-400 font-medium tablet:order-1 tablet:w-1/3">
            ©2020 Yourcompany
          </span>
        </div>
        <FooterSeparator />
        <div className="flex justify-between items-center">
          <FooterLinks />
          <FooterSocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
