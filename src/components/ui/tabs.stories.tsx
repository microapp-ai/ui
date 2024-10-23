import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

// Meta for Storybook
export default {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#000000" },
      ],
    },
  },
  subcomponents: { TabsList, TabsTrigger, TabsContent },
} as Meta;

// Template for the Tabs component
const Template: Story = (args) => (
  <Tabs defaultValue="tab1" {...args}>
    <TabsList className="w-[400px]">
      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">
      <div className="p-4">
        <h2 className="text-lg font-bold">Content for Tab 1</h2>
        <p>This is the content area for Tab 1.</p>
      </div>
    </TabsContent>
    <TabsContent value="tab2">
      <div className="p-4">
        <h2 className="text-lg font-bold">Content for Tab 2</h2>
        <p>This is the content area for Tab 2.</p>
      </div>
    </TabsContent>
  </Tabs>
);

// Default story
export const Default = Template.bind({});
Default.args = {
  className: "",
};
// Default story
export const DarkMode = Template.bind({});
DarkMode.args = {
  className: "dark"
};
