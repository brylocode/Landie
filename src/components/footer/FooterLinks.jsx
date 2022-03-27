const FooterLink = ({ children, href = "#" }) => (
  <a
    href={href}
    className="text-md text-blue-300 transition-transform hover:underline">
    {children}
  </a>
);

const FooterLinks = () => {
  return (
    <nav className="flex gap-4 tablet:gap-[60px]">
      <FooterLink>Home</FooterLink>
      <FooterLink>About</FooterLink>
      <FooterLink>Contact</FooterLink>
    </nav>
  );
};

export default FooterLinks;
