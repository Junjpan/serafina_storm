import type { Meta, StoryObj } from "@storybook/react";
import Chip, { ChipProp } from "./Chip";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "Component/Chip",
  component: Chip,
  argTypes: {
    closeEnable: { control: "boolean" },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

const Icon = () => (
  <span role="img" aria-label="icon">
    ❤️
  </span>
);

export const Playground: Story = ({
  label,
  closeEnable,
  leadingIcon,
}: ChipProp) => <Chip {...{ label, closeEnable, leadingIcon }}></Chip>;

Playground.args = {
  label: "chip",
  leadingIcon: <Icon />,
  closeEnable: true,
};
