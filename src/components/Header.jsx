import Menu from "./Menu";
import Button from "./ui/Button";
import Logo from "./ui/Logo";

export default function Header() {
  return (
    <header className="py-3">
      <div className="container">
        <div className="flex items-center justify-between">
          <Menu />
          <Logo />
          <Button wide size="sm">
            Buy now
          </Button>
        </div>
      </div>
    </header>
  );
}
