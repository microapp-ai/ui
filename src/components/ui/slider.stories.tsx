import React from "react";
import { Meta, Story } from "@storybook/react";
import { Slider } from "./slider";

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: {
    width: { control: "text" },
    label: { control: "text" },
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
  showValue: true,
};

// Slider with Custom Width
export const CustomWidth = Template.bind({});
CustomWidth.args = {
  min: 0,
  max: 100,
  step: 5,
  defaultValue: [50],
  width: "400px",
  label: "Custom Width Slider",
  showValue: true,
};

// Slider with Marks and Labels
export const WithMarks = Template.bind({});
WithMarks.args = {
  min: 0,
  // max: 100,
  step: 25,
  // defaultValue: [50],
  label: "Slider with Marks",
  marks: [
    { value: 0, label: "Low" },
    { value: 25, label: "Mid-Low" },
    { value: 50, label: "Mid" },
    { value: 75, label: "Mid-High" },
    { value: 100, label: "High" },
  ],
  width: "300px",
  showValue: true,
};

// Disabled Slider
export const Disabled = Template.bind({});
Disabled.args = {
  min: 0,
  // max: 100,
  defaultValue: [50],
  step: 25,
  // defaultValue: [50],
  label: "Slider with Marks",
  marks: [
    { value: 0, label: "Low" },
    { value: 25, label: "Mid-Low" },
    { value: 50, label: "Mid" },
    { value: 75, label: "Mid-High" },
    { value: 100, label: "High" },
  ],
  width: "300px",
  showValue: true,
  disabled:true,
};

// Slider with Step of 20
export const StepSlider = Template.bind({});
StepSlider.args = {
  min: 0,
  max: 100,
  step: 20,
  defaultValue: [40],
  label: "Slider with Step of 20",
  width: "250px",
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
  marks: [
    { value: 0, label: "Start" },
    { value: 50, label: "Middle" },
    { value: 100, label: "End" },
  ],
  width: "300px",
  showValue: true,
  className: "dark"
};
DarkMode.parameters = {
  backgrounds: { default: "dark" },
};

