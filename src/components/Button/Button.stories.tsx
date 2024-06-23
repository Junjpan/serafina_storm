import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { action } from "@storybook/addon-actions";
import { variants, ButtonProp } from "./Button";

const meta = {
  title: "Component/Button",
  component: Button,
  tags: ["autodocs"], //allow automatically add component doc to storybook
  argTypes: {
    variant: { options: variants, control: "select" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/** This is a better way to render the storybook component*/
// export const Playground: Story = {
//   render: ({ variant, label, ...props }) => {
//     return (
//       <Button
//         label={label}
//         onClick={action(label)}
//         variant={variant}
//         {...props}
//       />
//     );
//   },
//   args: {
//     variant: "outlined",
//     label: "Click me",
//   },
// };

export const Playground: Story = ({ variant, label, ...props }: ButtonProp) => {
  return (
    <Button
      label={label}
      onClick={action(label)}
      variant={variant}
      {...props}
    />
  );
};

Playground.args = {
  variant: "outlined",
  label: "Click me",
  disabled: false,
};
