import { Meta, Story } from "@storybook/react";
import { FileSelector, FileSelectorProps } from "@/components/ui/FileSelector";

export default {
  title: "Components/FileSelector",
  component: FileSelector,
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#000000" },
      ],
    },
  },
  args: {
    label: "Upload File",
    description: "Please select a file to upload.",
    clearable: false,
    placeholder: "No file selected",
    radius: "md",
    error: false,
    disabled: false,
    variant: "default",
    maxSize: 5 * 1024 * 1024, // 5MB limit
    formats: ["image/png", "image/jpeg"],
    width: "300px", // Default width for stories
  },
} as Meta<FileSelectorProps>;

// Template for creating variations of the component
const Template: Story<FileSelectorProps> = (args) => <FileSelector {...args} />;

// Default FileSelector
export const Default = Template.bind({});
Default.args = {
  className: "",
  label: "Upload File",
  description: "Please upload a file.",
  width: "430px", // Custom width
};
export const DarkMode = Template.bind({});
DarkMode.args = {
  className: "dark",
  label: "Upload File",
  description: "Please upload a file.",
  width: "430px", // Custom width
};
DarkMode.parameters = {
  backgrounds: { default: "dark" },
};

// Clearable FileSelector
export const Clearable = Template.bind({});
Clearable.args = {
  className: "",

  label: "Upload File",
  description: "You can clear the selected file.",
  clearable: true,
  width: "100%", // Custom width to span full width
};

// FileSelector with Custom Placeholder
export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  className: "",
  label: "Profile Picture",
  description: "Upload your profile picture.",
  placeholder: "Choose a picture...",
  width: "350px", // Custom width for placeholder variant
};

// Disabled FileSelector
export const Disabled = Template.bind({});
Disabled.args = {
  className: "",
  label: "Disabled File Selector",
  description: "This file selector is disabled.",
  disabled: true,
  width: "280px", // Custom width for disabled variant
};

// FileSelector with Error State
export const FileSelectorWithError = Template.bind({});
FileSelectorWithError.args = {
  className: "",
  label: "Upload File",
  description: "Only images are allowed.",
  error: "File format not supported", // Error message
  clearable: true,
  formats: ["image/png", "image/jpeg"],
  width: "320px", // Custom width with error
};

// Filled Variant FileSelector
export const FilledVariant = Template.bind({});
FilledVariant.args = {
  className: "",
  label: "Upload File",
  description: "This is the filled variant.",
  variant: "filled",
  width: "300px", // Custom width for filled variant
};

// FileSelector with Format Restrictions
export const WithFormatRestrictions = Template.bind({});
WithFormatRestrictions.args = {
  className: "",
  label: "Upload Image",
  description: "Accepted formats: PNG, JPEG",
  formats: ["image/png", "image/jpeg"],
  width: "340px", // Custom width with format restrictions
};
