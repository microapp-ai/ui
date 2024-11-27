import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from "./button";
import { IconSearch, IconBolt } from '@tabler/icons-react'
import React from "react";

const storyConfig: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#000000" },
      ],
    },
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "default",
          "destructive",
          "outline",
          "secondary",
          "ghost",
          "ghost-destructive",
          "link",
        ],
        defaultValue: "default",
      },
    },
    size: {
      control: {
        type: "select",
        options: ["default", "sm", "lg", "icon"],
      },
    },
    disabled: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
    children: {
      control: "text",
    },
    icon: {
      control: "select",
    },
  },
  args: {
    children: "Button",
  },
};

export default storyConfig;

const Template: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Default = Template.bind({});
Default.args = {
  className: "dark",
  variant: "default",
  size: "default",
};




export const Destructive = Template.bind({});
Destructive.args = {
  className: "",

  variant: "destructive",
  size: "default",
};

export const Outline = Template.bind({});
Outline.args = {
  className: "",

  variant: "outline",
  size: "default",
};

export const Secondary = Template.bind({});
Secondary.args = {
  className: "",

  variant: "secondary",
  size: "default",
};

export const Ghost = Template.bind({});
Ghost.args = {
  className: "",

  variant: "ghost",
  size: "default",
};

export const GhostDestructive = Template.bind({});
GhostDestructive.args = {
  className: "",
  variant: "ghost-destructive",
  size: "default",
};

export const Link = Template.bind({});
Link.args = {
  className: "",
  variant: "link",
  size: "default",
};

export const Large = Template.bind({});
Large.args = {
  className: "",
  variant: "default",
  size: "lg",
};

export const Small = Template.bind({});
Small.args = {
  className: "",

  variant: "default",
  size: "sm",
};

export const IconButton = Template.bind({});
IconButton.args = {
  className: "",

  variant: "default",
  size: "icon",
  children: "🔍",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  className: "",

  variant: "default",
  size: "default",
  icon: <IconBolt />,
  children: "Search",
};

export const Disabled = Template.bind({});
Disabled.args = {
  className: "",
  variant: "default",
  size: "default",
  disabled: true,
};
