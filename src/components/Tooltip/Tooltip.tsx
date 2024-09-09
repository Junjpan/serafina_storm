import React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

export const directions = ["left", "right", "bottom", "top"] as const;
type directionTyps = (typeof directions)[number];

export interface TooltipProps {
  portalContent: JSX.Element;
  /**
   * The component that trigger the tooltip, such as link, button
   */
  triggerComponent: JSX.Element;
  /**
   * Set the tooltip position relative to the trigger component
   */
  direction: "left" | "right" | "bottom" | "top";
  /**
   * the distance between the triggerComponent and the tooltip
   */
  sideOffset: number;
  /**
   * The preferred alignment against the trigger. May change when collisions occur.
   */
  align: "start" | "center" | "end";
  /**
   * An offset in pixels from the "start" or "end" alignment options.
   */
  alignOffset: number;
  /**
   * if the tooltip is open by default
   */
  defaultOpen: boolean;
}

const Tooltip: React.FunctionComponent<TooltipProps> = ({
  portalContent,
  triggerComponent,
  direction,
  sideOffset,
  defaultOpen = false,
  align = "center",
  alignOffset = 0,
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
    <RadixTooltip.TooltipProvider delayDuration={0}>
      <RadixTooltip.Root defaultOpen={defaultOpen}>
        <RadixTooltip.Trigger asChild>{triggerComponent}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side={direction}
            className="tooltip"
            {...{ sideOffset, align, alignOffset }}
          >
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
