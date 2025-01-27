import React from "react";
import { Meta, Story } from "@storybook/react";
import { Slider } from "./slider";

export default {
  title: "Components/Slider",
  component: Slider,
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
    width: { control: "text" },
    label: { control: "text" },
    description: { control: "text" },
  },
} as Meta;

const Template: Story = (args) => <Slider {...args} />;

// Default Slider
export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  step: 1,
  defaultValue: [50],
  label: "Default Slider",
  description: "This is the default slider without any marks.",
  width: "430px",
  showValue: true,
};

// Slider with Custom Width
export const CustomRange = Template.bind({});
CustomRange.args = {
  min: 0,
  max: 100,
  step: 5,
  defaultValue: [50],
  width: "430px",
  label: "Custom Width Slider",
  description: "Slider with a custom width of 400px.",
  showValue: true,
};

// Slider with Marks and Labels
export const WithMarks = Template.bind({});
WithMarks.args = {
  min: 0,
  max: 100,
  step: 25,
  defaultValue: [50],
  label: "Slider with Marks",
  description: "This slider has custom marks with labels.",
  marks: [
    { value: 0, label: "Low" },
    // { value: 25, label: "Mid-Low" },
    { value: 50, label: "Mid" },
    { value: 75, label: "Mid-High" },
    { value: 100, label: "High" },
  ],
  width: "430px",
  showValue: true,
};

export const TEST_SLIDER: Story = (args) => {
  return (<div className="w-full">
    <Slider
      min={0}
      max={100}
      step={25}
      defaultValue={[50]}
      label="Slider with Marks"
      description="This slider has custom marks with labels."
      marks={[
        { value: 0, label: "0" },
        { value: 25, label: "25" },
        { value: 50, label: "50" },
        // { value: 75, label: "75" },
        { value: 100, label: "10000" },
      ]}
      width="430px"
      showValue={true}
    />
  </div>)
}

// Disabled Slider
export const Disabled = Template.bind({});
Disabled.args = {
  min: 0,
  max: 100,
  defaultValue: [50],
  step: 25,
  label: "Disabled Slider with Marks",
  description: "This slider is disabled and includes marks.",
  marks: [
    { value: 0, label: "Low" },
    { value: 25, label: "Mid-Low" },
    { value: 50, label: "Mid" },
    { value: 75, label: "Mid-High" },
    { value: 100, label: "High" },
  ],
  width: "430px",
  showValue: true,
  disabled: true,
};

// Slider with Step of 20
export const StepSlider = Template.bind({});
StepSlider.args = {
  min: 0,
  max: 100,
  step: 20,
  defaultValue: [40],
  label: "Slider with Step of 20",
  description: "This slider increments in steps of 20.",
  width: "430px",
  showValue: true,
};

// Dark Mode Slider
export const DarkMode = Template.bind({});
DarkMode.args = {
  min: 0,
  max: 100,
  step: 10,
  defaultValue: [70],
  label: "Dark Mode Slider",
  description: "Slider styled for dark mode, with marks and labels.",
  marks: [
    { value: 0, label: "Start" },
    { value: 50, label: "Middle" },
    { value: 100, label: "End" },
  ],
  width: "430px",
  showValue: true,
  className: "dark",
};
DarkMode.parameters = {
  backgrounds: { default: "dark" },
};

