import React, { forwardRef, Fragment } from "react";
import clsx from "clsx";

export const variants = ["filled", "outlined", "text", "elevated"] as const;
export type VariantType = (typeof variants)[number];

export interface ButtonProp extends React.ComponentPropsWithoutRef<"button"> {
  /** It is going to be an icon component */
  iconComponent?: JSX.Element;
  /** This is used for the label name of the button. */
  label: string;
  loadingComponent?: JSX.Element;
  isLoading?: boolean;
  /**The variant includes filles, outlined, text, elevated */
  variant?: VariantType;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProp>((props, ref) => {
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
  } = props;

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
        disabled,
        filled: variant === "filled",
        outline: variant === "outlined",
        text: variant === "text",
        elevated: variant === "elevated",
      })}
      onClick={onClick}
      ref={ref}
      {...html}
    >
      {isLoading && loadingComponent ? loadingComponent : renderChildren()}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
