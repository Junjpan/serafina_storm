import React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

export interface TooltipProps {
  portalContent: JSX.Element;
  triggerComponent: JSX.Element;
  direction: "left" | "right" | "bottom" | "top";
}

const Tooltip: React.FunctionComponent<TooltipProps> = ({
  portalContent,
  triggerComponent,
  direction,
}) => {
  /**
   * if you want to create a tooltip based on the clickevent, we need to pass the below prop to 
   * the tirggerComponnent, and put the open props the Root 
   *  const [open, setOpen] = useState(false);
   * const updatedTriggerComponent = React.cloneElement(triggerComponent, {
    open,
    onClick: () => setOpen(!open)
  });
   */

  return (
    <RadixTooltip.TooltipProvider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{triggerComponent}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content side={direction} sideOffset={5}>
            {portalContent}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.TooltipProvider>
  );
};

export default Tooltip;

/**
 * todo: we need to custimize the portalContent for tooltip based on the Figma file
 */
