import React from "react";
import clsx from "clsx";

interface ButtonProp extends React.ComponentPropsWithoutRef<"button"> {
  label: string;
  variant?: "filled" | "outlined" | "text" | "elevated";
  icon?: React.ReactElement;
  loading?: boolean;
}
const Button: React.FunctionComponent<ButtonProp> = (prop) => {
  const {
    label,
    loading,
    variant = "filled",
    className,
    onClick,
    ...html
  } = prop;
  return (
    <button
      className={clsx("button", className, {
        filled: variant === "filled",
        outline: variant === "outlined",
        text: variant === "text",
        elevated: variant === "elevated",
      })}
      onClick={() => onClick}
    >
      {label}
    </button>
  );
};

export default Button;
