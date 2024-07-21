import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { action } from "@storybook/addon-actions";
import { variants, ButtonProp } from "./Button";

// Example icon component
const Icon = () => (
  <span role="img" aria-label="icon">
    🌟
  </span>
);

// const iconOptions = {
//   None: null,
//   Icon: <Icon />,
// };

const meta = {
  title: "Component/Button",
  component: Button,
  // tags: ["autodocs"], //allow automatically add component doc to storybook
  argTypes: {
    variant: {
      description: "The variant includes filles, outlined, text, elevated",
      options: variants,
      control: "select",
    },
    disabled: { control: "boolean" },
    loadingComponent: { table: { disable: true } }, // disable:true will hide the loadingComponent showing from the table
    iconComponent: {
      description: "you can pass an icon react component", // it is going to show in the autodocs
      name: "showIconComponent",
      options: ["hide", "show"],
      mapping: { show: <Icon />, hide: undefined },
    },
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

export const Playground: Story = ({
  variant,
  label,
  iconComponent,
  ...props
}: ButtonProp) => {
  return (
    <Button
      label={label}
      onClick={action(label)}
      variant={variant}
      loadingComponent={<div>Loading...</div>}
      iconComponent={iconComponent}
      {...props}
    />
  );
};

//setup default value
Playground.args = {
  variant: "outlined",
  label: "Click me",
  disabled: false,
  isLoading: false,
  iconComponent: undefined,
};
