import React from "react";

export interface ChipProp {
  /**
   * label: the name of the chip
   */
  label: string;
  /** closeEnable: if this chip is closeable */
  closeEnable: boolean;
  /**
   * leadingIcon: the react element for Icon
   */
  leadingIcon?: JSX.Element;
}

/**This is a filter chip */
const Chip: React.FunctionComponent<ChipProp> = ({
  label,
  closeEnable,
  leadingIcon,
}) => {
  return (
    <div className="chip">
      {leadingIcon && leadingIcon}
      <p>{label}</p>
      {closeEnable && <button className="chip__close">X</button>}
    </div>
  );
};

export default Chip;
