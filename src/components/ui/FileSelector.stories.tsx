import { Meta, Story } from "@storybook/react";
import { FileSelector, FileSelectorProps } from "@/components/ui/FileSelector";

export default {
  title: "Components/FileSelector",
  component: FileSelector,
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
  label: "Upload File",
  description: "Please upload a file.",
  width: "430px", // Custom width
};

// Clearable FileSelector
export const Clearable = Template.bind({});
Clearable.args = {
  label: "Upload File",
  description: "You can clear the selected file.",
  clearable: true,
  width: "100%", // Custom width to span full width
};

// FileSelector with Custom Placeholder
export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  label: "Profile Picture",
  description: "Upload your profile picture.",
  placeholder: "Choose a picture...",
  width: "350px", // Custom width for placeholder variant
};

// Disabled FileSelector
export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled File Selector",
  description: "This file selector is disabled.",
  disabled: true,
  width: "280px", // Custom width for disabled variant
};

// FileSelector with Error State
export const FileSelectorWithError = Template.bind({});
FileSelectorWithError.args = {
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
  label: "Upload File",
  description: "This is the filled variant.",
  variant: "filled",
  width: "300px", // Custom width for filled variant
};

// FileSelector with Format Restrictions
export const WithFormatRestrictions = Template.bind({});
WithFormatRestrictions.args = {
  label: "Upload Image",
  description: "Accepted formats: PNG, JPEG",
  formats: ["image/png", "image/jpeg"],
  width: "340px", // Custom width with format restrictions
};
