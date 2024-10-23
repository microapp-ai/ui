import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { Modal } from "./modal";
import { Button } from "./button";

export default {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#000000" },
      ],
    },
  },
} as Meta;

// Template for reusing code
const Template: Story = (args) => {
  const [opened, setOpened] = useState(false);
  const openModal = () => setOpened(true);
  const closeModal = () => setOpened(false);

  return (
    <>
      <button onClick={openModal} className="btn-primary">
        Open Modal
      </button>
      <Modal opened={opened} onClose={closeModal} {...args}>
        {args.children}
      </Modal>
    </>
  );
};

// Default modal with title and close button
export const DefaultModal: Story = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open Modal</Button>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Default Modal">
        <p>This is a default modal with a close button and a title.</p>
        <div className="mt-[24px] flex gap-2">
          <Button onClick={() => setOpened(false)}>OK</Button>
          <Button variant="outline" onClick={() => setOpened(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

DefaultModal.parameters = {
  docs: {
    description: {
      story: "This is a default modal with a close button and a title.",
    },
    source: {
      code: `
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
        <Modal opened={opened} onClose={() => setOpened(false)} title="Default Modal">
          <p>This is a default modal with a close button and a title.</p>
          <div className="mt-[24px] flex gap-2">
            <Button>OK</Button>
            <Button variant="outline" onClick={() => setOpened(false)}>
              Close
            </Button>
          </div>
        </Modal>
      `,
    },
  },
};
// Modal in dark mode
export const DarkMode = Template.bind({});
DarkMode.args = {
  title: "Dark Mode Modal",
  className: "dark", // Adding dark mode class
  children: (
    <>
      <p>This modal is displayed in dark mode.</p>
      <button className="btn-secondary mt-4">Perform Action</button>
    </>
  ),
};
DarkMode.parameters = {
  backgrounds: { default: "dark" },
};

// Modal without a close button
export const WithoutCloseButton = Template.bind({});
WithoutCloseButton.args = {
  title: <div className="">
    <h2 className="text-lg font-semibold">Modal without Close Button</h2>
    <p className="text-sm text-muted-foreground">This modal does not have a close button.</p>
  </div>,
  children: (
    <>
      <p>This modal does not have a close button. You can close it via external triggers.</p>
      <button className="btn-secondary mt-4">Close Modal</button>
    </>
  ),
  withCloseButton: false,
};

// Modal without a title
export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  children: (
    <>
      <p>This modal does not have a title.</p>
      <button className="btn-secondary mt-4">Close Modal</button>
    </>
  ),

};

// Modal with long content
export const LongContent = Template.bind({});
LongContent.args = {
  title: "Modal with Long Content",
  children: (
    <>
      <p>This modal contains a lot of content to test scrolling behavior.</p>
      <div style={{ height: "300px", background: "#f0f0f0", padding: "20px" }}>
        Simulated long content
      </div>
      <button className="btn-secondary mt-4">Close Modal</button>
    </>
  ),
};


