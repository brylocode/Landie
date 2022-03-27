import classNames from "classnames";

interface ButtonProps {
  size?: "sm" | "md" | "xl";
  color?: "primary";
  outline?: boolean;
  wide?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  size = "md",
  color = "primary",
  wide = false,
  outline = false,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={classNames(
        "btn",
        color && `btn-${color}`,
        size && `btn-${size}`,
        wide && "btn-wide",
        outline && "btn-outline",
        className
      )}>
      {children}
    </button>
  );
};

export default Button;
