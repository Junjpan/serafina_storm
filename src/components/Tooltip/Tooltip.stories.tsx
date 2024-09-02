import type { Meta, StoryObj } from "@storybook/react";
import Tooltip, { TooltipProps } from "./Tooltip";
import Button from "../Button/Button";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "Component/tooltip",
  component: Tooltip,
  tags: ["autodocs"], //allow automatically add component doc to storybook
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = ({
  triggerComponent,
  portalContent,
  direction,
  // ...props
}: TooltipProps) => {
  return <Tooltip {...{ triggerComponent, portalContent, direction }} />;
};

Playground.args = {
  portalContent: <p>Hello wolrd, I love you</p>,
  triggerComponent: <Button label="view" />,
  direction: "top",
};

/**
 * todo:customize the controls area
 */
