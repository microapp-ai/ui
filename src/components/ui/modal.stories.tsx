import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { Modal } from "./modal";
import { Button } from "./button";
import { cn } from "@/utils";
import { XIcon } from "lucide-react";
import { Input } from "./input";
import { Select } from "./select";


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
    <div className={cn("flex flex-col gap-4", args.className)}>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal opened={opened} onClose={closeModal} {...args}>
        {typeof args.children === "function"
          ? args.children({ closeModal })
          : args.children}
      </Modal>
    </div>
  );
};

// Default modal with title and close button
export const Default = Template.bind({});
Default.args = {
  title: "Default Modal",
  children: ({ closeModal }: { closeModal: () => void }) => (
    <>
      <p className="text-foreground-muted">This is a default modal with a close button and a title.</p>
      <div className="mt-[24px] flex gap-2 justify-end">
        <Button variant="outline" onClick={closeModal}>Cancel</Button>
        <Button variant="default" onClick={closeModal}>Confirm</Button>
      </div>
    </>
  ),
};

// Modal in dark mode
export const DarkMode = Template.bind({});
DarkMode.args = {
  title: <p className="text-foreground">DarkMode Modal</p>,
  className: 'dark',
  children: ({ closeModal }: { closeModal: () => void }) => (
    <>
      <p className="text-foreground-muted">This is a dark mode modal with a close button and a title.</p>
      <div className="mt-[24px] flex gap-2 justify-end">
        <Button variant="outline" onClick={closeModal}>Cancel</Button>
        <Button variant="default" onClick={closeModal}>Confirm</Button>
      </div>
    </>
  ),
};
DarkMode.parameters = {
  backgrounds: { default: "dark" },
};


// Modal without a title
export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  title: null,
  children: ({ closeModal }: { closeModal: () => void }) => (
    <>
      <p className="text-foreground">This modal does not have a title.</p>
      <Button variant="secondary" onClick={closeModal} className="mt-2">Close</Button>
    </>
  ),
};

export const WithoutCloseButton = Template.bind({});
WithoutCloseButton.args = {
  title: "Modal without Close Button",
  children: ({ closeModal }: { closeModal: () => void }) => (
    <>
      <p className="text-foreground">This modal does not have a close button.</p>
      <Button variant="secondary" onClick={closeModal} className="mt-2">Close</Button>
    </>
  ),
  withCloseButton: false,
};

// Modal with long content
export const LongContent = Template.bind({});
LongContent.args = {
  title: "Modal with Long Content",
  children: ({ closeModal }: { closeModal: () => void }) => (
    <>
      <p className="text-foreground">This modal contains a lot of content to test scrolling behavior.</p>
      <div className="max-h-[400px] overflow-y-auto bg-surface-background mt-4">
        <div className="h-[800px] p-4 text-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum mollitia perspiciatis sit, quis veniam ex? Quae harum aliquid iste corporis saepe dolore suscipit quaerat quibusdam culpa alias? Neque totam natus dolore soluta rem nisi nemo nobis recusandae magnam libero hic exercitationem harum, consequatur excepturi fugit unde. Ducimus voluptas, ex molestiae quia reiciendis nostrum iusto veniam dignissimos assumenda voluptatibus porro, inventore cupiditate veritatis, officia tenetur dolor commodi laboriosam doloribus esse. Repellat repellendus dolore molestias velit doloremque iusto nobis nostrum at voluptate accusamus, ab cumque fuga unde laborum voluptates tempore eum tenetur dolores dolorum itaque accusantium. Rem excepturi tempore culpa ipsum, neque unde et earum ut facere cumque rerum optio dolorum alias asperiores nobis, odio quos consequuntur. Alias error maxime dicta fugiat quaerat quidem iure, ratione et deserunt tempore aspernatur aliquam explicabo inventore, odit quam enim in magnam saepe necessitatibus doloremque consectetur eum ut adipisci? Minus perspiciatis, sapiente est, nemo libero debitis odio natus velit deleniti, aperiam magni impedit molestiae perferendis praesentium sunt voluptatibus nulla suscipit beatae minima commodi! Vel quod adipisci quos, voluptates excepturi officia velit aperiam iure eveniet sunt quaerat est rerum alias nostrum rem incidunt debitis sint. Nobis tempora temporibus officiis dolor nostrum vitae cumque labore voluptate. Cupiditate, adipisci veritatis libero tenetur ducimus inventore perferendis eaque ipsam saepe tempore accusamus recusandae! Cumque magni nemo impedit! Facilis id porro dolore temporibus quae neque quasi aliquid modi at eum, consequuntur eius quo cum labore aut vitae quia velit illo! Incidunt, repellendus architecto? Similique, quam est asperiores doloremque voluptatum, ab quas recusandae assumenda vitae sed unde impedit mollitia accusantium libero! Nulla ullam numquam saepe ipsa iure recusandae sed, ex officiis, assumenda eveniet consectetur quis ut fugiat quaerat praesentium architecto asperiores rerum doloribus aut nemo officia! Dicta numquam dolorum quisquam. Eum consectetur exercitationem soluta dignissimos laborum delectus iste! Magni quos nihil animi eius.
        </div>
      </div>
      <Button variant="secondary" onClick={closeModal} className="my-2">Close</Button>
    </>
  ),
};


// Settings Modal

export const SettingsModal = Template.bind({});
SettingsModal.args = {
  title: <div className="">
    <div className="text-lg text-foreground font-[600]">Settings</div>
    <div className="text-foreground-muted font-[400] mb-4">
      This is a short description
    </div>
  </div>,
  children: ({ closeModal }: { closeModal: () => void }) => (
    <div className="w-full bg-surface-backgroundPrimary">
      <Input
        label="Page Url"
        placeholder="Enter page url..."
        value={"https://microapp.ai"}
        className="mb-2"
      />
      <Select
        label="Theme"
        options={[
          { label: "Light", value: "light" },
          { label: "Dark", value: "dark" },
        ]}
        className="mb-8"
      />
      {/*divider*/ }
      <div className="border-t border-foreground-border my-3"/>
      <div className="mt-[24px] flex gap-2 justify-end">
        <Button variant="outline" onClick={closeModal}>Cancel</Button>
        <Button variant="default" onClick={closeModal}>Confirm</Button>
      </div>


    </div>
  ),
  closeButton: <Button size="icon" variant="outline">
    <XIcon className="h-5 w-5" />
  </Button>,
  modalHeader: "bg-surface-backgroundSecondary"
};

