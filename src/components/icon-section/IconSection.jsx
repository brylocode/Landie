import classNames from "classnames";

export default function IconSection({ children, className }) {
  return (
    <div
      className={classNames(
        "flex flex-col desktop:flex-row-reverse items-center desktop:justify-between",
        className
      )}>
      {children}
    </div>
  );
}
