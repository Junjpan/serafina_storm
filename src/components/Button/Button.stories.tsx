import Button from "./Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Component/Button",
  component: Button,
};

export const Playground = () => {
  return <Button label="Hello" onClick={action("hello")} />;
};
