import React from "react";
import { Meta, Story } from "@storybook/react";
import { Switch } from "./switch";

const meta: Meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#000000" },
      ],
    },
  },
};

export default meta;

const Template: Story<React.ComponentPropsWithoutRef<typeof Switch>> = (args) => (
  <Switch {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: "",
}; 
export const DarkMode = Template.bind({});
DarkMode.args = {
  className: "dark",
  disabled: false,
  label: ""
};
DarkMode.parameters = {
  backgrounds: { default: "dark" },
};
export const WithLabel = Template.bind({});
WithLabel.args = {
  className: "",
  label: "Switch Label"
};


export const Disabled = Template.bind({});
Disabled.args = {
  className: "",
  disabled: true,
};