import React from "react";
import { Meta, Story } from "@storybook/react";
import { Switch } from "./switch";

const meta: Meta = {
  title: "Components/Switch",
  component: Switch,
};

export default meta;

const Template: Story<React.ComponentPropsWithoutRef<typeof Switch>> = (args) => (
  <Switch {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: "",
};

export const Disabled = Template.bind({});
Disabled.args = {
  className: "",
  disabled: true,
};