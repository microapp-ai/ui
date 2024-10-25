import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";
import { Check } from "lucide-react";

// Meta configuration for the Storybook component
const meta: Meta = {
  title: "Components/Select",
  component: Select,
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

type Story = StoryObj<typeof Select>;

// Default Select Story
export const Default: Story = {
  render: () => (
    <Select
      label={<span className="font-bold">Select an option</span>}
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
        { value: "option4", label: "Option 4" },
        { value: "option5", label: "Option 5" },
      ]}
      item_indicator_icon={<Check className="h-4 w-4" />}
      width="180px"
    />
  ),
};

// Default Select Story
export const DarkMode: Story = {
  render: () => (
    <Select
      className="dark"
      label={<span className="font-bold">Select an option</span>}
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
        { value: "option4", label: "Option 4" },
        { value: "option5", label: "Option 5" },
      ]}
      item_indicator_icon={<Check className="h-4 w-4" />}
      width="180px"
    />
  ),
};
DarkMode.parameters = {
  backgrounds: { default: "dark" },
};

// Disabled Select Story
export const Disabled: Story = {
  render: () => (
    <Select
      label={<span className="font-bold">Disabled Select</span>}
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
        { value: "option4", label: "Option 4" },
        { value: "option5", label: "Option 5" },
      ]}
      item_indicator_icon={<Check className="h-4 w-4" />}
      width="180px"
      disabled
    />
  ),
};

// Large Width Select Story
export const LargeWidth: Story = {
  render: () => (
    <Select
      label={<span className="font-bold">Large Width</span>}
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
        { value: "option4", label: "Option 4" },
        { value: "option5", label: "Option 5" },
      ]}
      item_indicator_icon={<Check className="h-4 w-4" />}
      width="600px" // Large width
    />
  ),
};
