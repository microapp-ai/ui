import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input, InputProps } from "./input";
import { Mail, Search } from "lucide-react";
import { IconLock, IconNumber123, IconSearch } from "@tabler/icons-react";

export default {
  title: "Components/Input",
  component: Input,
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
};

// Password input with right icon
export const PasswordWithRightIcon = Template.bind({});
PasswordWithRightIcon.args = {
  type: "password",
  placeholder: "Enter password",
  rightIcon: <IconLock className="h-4 w-4 text-actionable-secondary" />, // Example icon on the right
};

// Search input with left icon
export const SearchWithLeftIcon = Template.bind({});
SearchWithLeftIcon.args = {
  type: "search",
  placeholder: "Search...",
  leftIcon: <Search className="h-4 w-4 text-actionable-secondary" />, // Example of a search icon
};

// Disabled input story
export const DisabledInput = Template.bind({});
DisabledInput.args = {
  type: "text",
  placeholder: "Disabled input",
  disabled: true,
};

// Email input with left icon
export const EmailWithLeftIcon = Template.bind({});
EmailWithLeftIcon.args = {
  type: "email",
  placeholder: "Enter your email",
  leftIcon: <IconSearch className="h-4 w-4 text-actionable-secondary" />, // Example of an email icon
};

// Number input with right icon
export const NumberWithRightIcon = Template.bind({});
NumberWithRightIcon.args = {
  type: "number",
  placeholder: "Enter a number",
  rightIcon: <IconNumber123 className="h-4 w-4 text-actionable-secondary" />, // Example icon on the right
};