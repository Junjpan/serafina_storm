import React, { Fragment } from "react";
import clsx from "clsx";
import { loadComponents } from "next/dist/server/load-components";

interface ButtonProp extends React.ComponentPropsWithoutRef<"button"> {
  label: string;
  variant?: "filled" | "outlined" | "text" | "elevated";
  iconComponent?: JSX.Element;
  loadingComponent?: JSX.Element;
  isLoading?: boolean;
}
const Button: React.FunctionComponent<ButtonProp> = (prop) => {
  const {
    label,
    isLoading = false,
    iconComponent,
    loadingComponent,
    variant = "filled",
    className,
    onClick,
    ...html
  } = prop;

  const renderChildren = (): React.ReactElement => {
    return (
      <Fragment>
        {iconComponent && iconComponent}
        <span>{label}</span>
      </Fragment>
    );
  };
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
      {isLoading && loadingComponent ? loadingComponent : renderChildren()}
    </button>
  );
};

export default Button;
