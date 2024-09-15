import React, { useState, ReactNode } from "react";
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
  direction?: "left" | "right" | "bottom" | "top";
  /**
   * the distance between the triggerComponent and the tooltip,default is 0
   */
  sideOffset?: number;
  /**
   * The preferred alignment against the trigger. May change when collisions occur.
   */
  align?: "start" | "center" | "end";
  /**
   * An offset in pixels from the "start" or "end" alignment options.
   */
  alignOffset?: number;
  /**
   * if the tooltip is open by default
   */
  defaultOpen?: boolean;
  /**
   * based on which event to trigger tooltip, by default it's hover
   */
  eventType?: "Hover" | "Click";
}

const Tooltip: React.FunctionComponent<TooltipProps> = ({
  portalContent,
  triggerComponent,
  direction,
  sideOffset,
  defaultOpen = false,
  align = "center",
  alignOffset = 0,
  eventType = "Hover",
}) => {
  const [open, setOpen] = useState(defaultOpen);

  const handleClick = eventType === "Click" ? () => setOpen(!open) : undefined;

  return (
    <RadixTooltip.TooltipProvider delayDuration={0}>
      <RadixTooltip.Root
        open={eventType === "Click" ? open : undefined}
        defaultOpen={defaultOpen}
      >
        <RadixTooltip.Trigger asChild>
          {React.cloneElement(triggerComponent, { onClick: handleClick })}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side={direction}
            className="tooltip"
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
          >
            {portalContent}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.TooltipProvider>
  );
};

export default Tooltip;
