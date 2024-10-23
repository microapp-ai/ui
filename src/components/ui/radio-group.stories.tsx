import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./radio-group"; // Adjust the import path as necessary

// Meta configuration for the Storybook component
const meta: Meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
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

type Story = StoryObj<typeof RadioGroup>;

// Default RadioGroup Story
export const Default: Story = {
  render: () => (
    <RadioGroup>
      <RadioGroupItem value="option1" label="Option 1" />
      <RadioGroupItem value="option2" label="Option 2" />
      <RadioGroupItem value="option3" label="Option 3" />
    </RadioGroup>
  ),
};

// DarkMode RadioGroup Story
export const DarkMode: Story = {
  render: () => (
    <RadioGroup className="dark">
      <RadioGroupItem value="option1" label="Option 1" />
      <RadioGroupItem value="option2" label="Option 2" />
      <RadioGroupItem value="option3" label="Option 3" />
    </RadioGroup>
  ),
};

// Horizontal RadioGroup Story
export const Horizontal: Story = {
  render: () => (
    <RadioGroup horizontal>
      <RadioGroupItem value="option1" label="Option 1" />
      <RadioGroupItem value="option2" label="Option 2" />
      <RadioGroupItem value="option3" label="Option 3" />
    </RadioGroup>
  ),
};

// Disabled RadioGroup Story
export const Disabled: Story = {
  render: () => (
    <RadioGroup>
      <RadioGroupItem value="option1" label="Option 1" />
      <RadioGroupItem value="option2" label="Option 2" />
      <RadioGroupItem value="option3" label="Option 3(Disabled)" disabled />
    </RadioGroup>
  ),
};
