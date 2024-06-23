import React, { Fragment } from "react";
import clsx from "clsx";

export const variants = ["filled", "outlined", "text", "elevated"] as const;
export type VariantType = (typeof variants)[number];

export interface ButtonProp extends React.ComponentPropsWithoutRef<"button"> {
  /** This is used for the label name of the button */
  label: string;
  variant?: VariantType;
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
    disabled,
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
        disabled,
      })}
      onClick={onClick}
    >
      {isLoading && loadingComponent ? loadingComponent : renderChildren()}
    </button>
  );
};

export default Button;
