import React from "react";
import { Meta, Story } from "@storybook/react";
import { Textarea, TextareaProps } from "./textarea"; // Adjust the path to your Textarea component

export default {
  title: "Components/Textarea",
  component: Textarea,
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
    label: {
      control: "text",
      defaultValue: "Label",
    },
    placeholder: {
      control: "text",
      defaultValue: "Enter your text...",
    },
    description: {
      control: "text",
      defaultValue: "This is a description",
    },
    error: {
      control: "text",
      defaultValue: "",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    rows: {
      control: { type: "number" },
      defaultValue: 5,
    },
    maxLength: {
      control: { type: "number" },
      defaultValue: 200,
    },
    className: {
      control: "text",
    },
    variant: {
      control: { type: "select" }, // Add control for variant
      options: ["default", "filled"],
      defaultValue: "default",
    },
  },
} as Meta;

// Template for the Textarea component
const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

// Default Textarea story
export const Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Enter your text...",
  description: "This is a description",
  variant: "default", // Set default variant
  rows: 5,
  width:'430px',
  disabled: false,
};
// Dark Textarea story
export const DarkMode = Template.bind({});
DarkMode.args = {
  className: "dark",
  label: "Label",
  placeholder: "Enter your text...",
  description: "This is a description",
  variant: "default", // Set default variant
  rows: 5,
  width: '430px',
  disabled: false,
};

DarkMode.parameters = {
  backgrounds: { default: "dark" },
};

// Textarea with error message
export const WithError = Template.bind({});
WithError.args = {
  label: "Label",
  placeholder: "Enter your text...",
  description: "This is a description",
  error: "This field is required",
  rows: 5,
  width: '430px',
  variant: "default",
};

// Textarea with maxLength
export const WithMaxLength = Template.bind({});
WithMaxLength.args = {
  label: "Label",
  placeholder: "Enter your text...",
  maxLength: 150,
  description: "Max length is 150 characters.",
  rows: 5,
  width: '430px',
  variant: "default",
};

// Disabled Textarea story
export const Disabled = Template.bind({});
Disabled.args = {
  label: "Label",
  placeholder: "Disabled textarea",
  disabled: true,
  description: "This input is disabled.",
  rows: 5,
  width: '430px',

  variant: "default",
};

// Textarea with custom className for additional styles
export const CustomClassName = Template.bind({});
CustomClassName.args = {
  label: "Label",
  placeholder: "Custom class textarea",
  className: "bg-gray-100 border-blue-500",
  rows: 5,
  width: '430px',
  variant: "default",
};

// Filled variant Textarea story
export const Filled = Template.bind({});
Filled.args = {
  label: "Label",
  placeholder: "Filled variant textarea",
  variant: "filled",
  description: "This is a filled variant.",
  rows: 5,
  width: '430px',
};
