// input.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input, InputProps } from "./input";
import { IconLock, IconNumber123, IconSearch } from "@tabler/icons-react";

export default {
  title: "Components/Input",
  component: Input,
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
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number", "search", "url"],
      defaultValue: "text",
    },
    placeholder: {
      control: "text",
      defaultValue: "Enter text...",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    label: {
      control: "text",
      defaultValue: "",
    },
    description: {
      control: "text",
      defaultValue: "",
    },
    error: {
      control: "boolean",
      defaultValue: false,
    },
    errorMessage: {
      control: "text",
      defaultValue: "",
    },
    width: {
      control: "text",
      defaultValue: "100%",
    },
    leftIcon: {
      control: false, // Disable Storybook control for the icon
    },
    rightIcon: {
      control: false, // Disable Storybook control for the icon
    },
  },
} as Meta;

// Template for the Input component
const Template: Story<InputProps> = (args) => <Input {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "Enter text...",
  label: "Default Input",
  description: "This is a default input field.",
};
export const DarkMode = Template.bind({});
DarkMode.args = {
  className: "dark",
  type: "text",
  placeholder: "Enter text...",
  label: "Default Input",
  description: "This is a default input field.",
};
DarkMode.parameters = {
  backgrounds: { default: "dark" },
};

// Password input with right icon
export const PasswordWithRightIcon = Template.bind({});
PasswordWithRightIcon.args = {
  type: "password",
  placeholder: "Enter password",
  label: "Password Input",
  rightIcon: <IconLock className="h-4 w-4 text-actionable-secondary" />,
};

// Search input with left icon
export const SearchWithLeftIcon = Template.bind({});
SearchWithLeftIcon.args = {
  type: "search",
  placeholder: "Search...",
  label: "Search Input",
  leftIcon: <IconSearch className="h-4 w-4 text-actionable-secondary" />,
};

// Disabled input story
export const DisabledInput = Template.bind({});
DisabledInput.args = {
  type: "text",
  placeholder: "Disabled input",
  label: "Disabled Input",
  disabled: true,
  description: "This input is disabled.",
};

// Email input with left icon
export const EmailWithLeftIcon = Template.bind({});
EmailWithLeftIcon.args = {
  type: "email",
  placeholder: "Enter your email",
  label: "Email Input",
  leftIcon: <IconSearch className="h-4 w-4 text-actionable-secondary" />,
};

// Number input with right icon
export const NumberWithRightIcon = Template.bind({});
NumberWithRightIcon.args = {
  type: "number",
  placeholder: "Enter a number",
  label: "Number Input",
  rightIcon: <IconNumber123 className="h-4 w-4 text-actionable-secondary" />,
};

// Input with error state
export const InputWithError = Template.bind({});
InputWithError.args = {
  type: "text",
  placeholder: "Input with error",
  label: "Error Input",
  description: "This is an input with error state.",
  error: true,
  errorMessage: "This field is required",
};

// Input with custom width
export const InputWithCustomWidth = Template.bind({});
InputWithCustomWidth.args = {
  type: "text",
  placeholder: "Custom width input",
  label: "Custom Width Input",
  width: "300px",
};
