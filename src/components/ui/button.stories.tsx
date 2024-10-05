import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from "./button";

const storyConfig: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
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
          "link",
        ],
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
  },
  args: {
    children: "Click here!",
  },
};

export default storyConfig;

const Template: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Default: StoryFn = Template.bind({});
Default.args = {
  variant: "default",
  size: "default",
};

export const Destructive: StoryFn = Template.bind({});
Destructive.args = {
  variant: "destructive",
  size: "default",
};

export const Outline: StoryFn = Template.bind({});
Outline.args = {
  variant: "outline",
  size: "default",
};

export const Secondary: StoryFn = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: "default",
};

export const Ghost: StoryFn = Template.bind({});
Ghost.args = {
  variant: "ghost",
  size: "default",
};

export const Link: StoryFn = Template.bind({});
Link.args = {
  variant: "link",
  size: "default",
};

export const Large: StoryFn = Template.bind({});
Large.args = {
  variant: "default",
  size: "lg",
};

export const Small: StoryFn = Template.bind({});
Small.args = {
  variant: "default",
  size: "sm",
};

export const IconButton: StoryFn = Template.bind({});
IconButton.args = {
  variant: "default",
  size: "icon",
  children: "🔍",
};

export const Disabled: StoryFn = Template.bind({});
Disabled.args = {
  variant: "default",
  size: "default",
  disabled: true,
};
