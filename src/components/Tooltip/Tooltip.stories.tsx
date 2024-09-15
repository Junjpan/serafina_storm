import type { Meta, StoryObj } from "@storybook/react";
import Tooltip, { TooltipProps, directions } from "./Tooltip";
import Button from "../Button/Button";
import { action } from "@storybook/addon-actions";
import "./tooltip.stories.scss";

const meta = {
  title: "Component/tooltip",
  component: Tooltip,
  tags: ["autodocs"], //allow automatically add component doc to storybook
  argTypes: {
    direction: {
      control: "select",
      options: directions,
    },
    sideOffset: {
      control: "number",
    },
    align: {
      control: "inline-radio",
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = ({
  triggerComponent,
  portalContent,
  direction,
  ...props
}: TooltipProps) => {
  return (
    <div className="display">
      <p>Hover over to view tooltip</p>
      <Tooltip {...{ triggerComponent, portalContent, direction, ...props }} />
    </div>
  );
};

Playground.args = {
  portalContent: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam
      provident iusto ducimus incidunt perferendis consequatur.{" "}
    </p>
  ),
  triggerComponent: <Button label="view" />,
  direction: "top",
  sideOffset: 4,
  defaultOpen: false,
  align: "center",
  alignOffset: 0,
};

export const ShowTooltipByClick: Story = ({
  portalContent,
  // eventType,
  // triggerComponent,
  ...props
}: TooltipProps) => {
  return (
    <div className="display">
      <Tooltip {...{ portalContent, ...props }} />
    </div>
  );
};

ShowTooltipByClick.args = {
  portalContent: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam
      provident iusto ducimus incidunt perferendis consequatur.{" "}
    </p>
  ),
  triggerComponent: (
    <div role="button" className="link">
      Learn more
    </div>
  ),
  eventType: "Click",
  defaultOpen: true,
};
