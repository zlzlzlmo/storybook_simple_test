import Button, { ButtonProps } from "../components/buttons/Button";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
};

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Location = Template.bind({});
Location.args = {
  btnType: "location",
};

export const Navigation = Template.bind({});
Navigation.args = {
  btnType: "navigation",
};
