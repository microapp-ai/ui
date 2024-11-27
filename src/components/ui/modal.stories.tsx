import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { Modal } from "./modal";
import { Button } from "./button";
import { cn } from "@/utils";


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
  const closeModal = () => {
    setOpened(false);
    args.onClose?.(); // Call the onClose passed from Storybook args
  };


  return (
    <div className={cn("flex flex-col gap-4",args.className)}>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal opened={opened} onClose={closeModal} {...args}>
        {args.children}
      </Modal>
    </div>
  );
};
// Default modal with title and close button
export const Default = Template.bind({});
Default.args = {
  title: "Default Modal",
  children: (
    <>
      <p className="text-foreground-muted">This is a default modal with a close button and a title.</p>
      <div className="mt-[24px] flex gap-2 justify-end">
        <Button onClick={() => Default.args?.onClose?.()}>OK</Button>
        <Button variant="secondary" onClick={() => Default.args?.onClose?.()}>Close</Button>
      </div>
    </>
  ),
};

// Modal in dark mode
export const DarkMode = Template.bind({});
DarkMode.args = {
  title: <p className="text-foreground">DarkMode Modal</p>,
  children: (
    <>
      <p className="text-foreground-muted">This is a default modal with a close button and a title.</p>
      <div className="mt-[24px] flex gap-2">
        <Button onClick={() => DarkMode.args?.onClose?.()}>OK</Button>
        <Button variant="secondary" onClick={() => DarkMode.args?.onClose?.()}>Close</Button>
      </div>
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
    <h2 className="text-lg font-semibold text-foreground">Modal without Close Button</h2>
    <p className="text-sm text-muted-foreground">This modal does not have a close button.</p>
  </div>,
  children: (
    <>
      <p className="text-foreground">This modal does not have a close button. You can close it via external triggers.</p>
      <Button variant={'outline'} className="my-4">
        Close
      </Button>
    </>
  ),
  withCloseButton: false,
};

// Modal without a title
export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  children: (
    <>
      <p className="text-foreground">This modal does not have a title.</p>
      <Button variant={'outline'} className="my-4">
        Close
      </Button>
    </>
  ),

};

// Modal with long content
export const LongContent = Template.bind({});
LongContent.args = {
  title: "Modal with Long Content",
  children: (
    <>
      <p className="text-foreground">This modal contains a lot of content to test scrolling behavior.</p>
      <div
        className="max-h-[400px] overflow-y-auto bg-surface-backgroundoutline my-4"
      >
        <div className="h-[800px] p-4  text-foreground-onActionableoutline">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate iste, veniam totam, error quae sunt quisquam, pariatur ducimus ea molestiae itaque perferendis aperiam nobis quam sint dignissimos eligendi necessitatibus in. Laborum facilis assumenda repellat voluptas unde perspiciatis at ab enim porro voluptatibus nulla amet delectus maiores labore hic vero ad non ipsam id, alias temporibus corporis dolore earum maxime. Beatae quod porro dolorem dolorum vero eum exercitationem voluptatem eos nihil quos, culpa sint deleniti doloremque temporibus nesciunt totam voluptate ratione perferendis architecto vitae iure vel facilis reprehenderit atque. Expedita iste perspiciatis quis beatae reprehenderit quaerat sint cum, est, vitae ab nesciunt consequuntur eaque. Accusamus asperiores assumenda magni modi ipsa minus rerum laudantium quaerat molestias, suscipit reiciendis quisquam. Maiores provident esse, reiciendis non sunt quae id modi recusandae laborum, sint dolore officiis consequuntur tempora neque nesciunt eos blanditiis veritatis numquam! Tenetur nesciunt alias eos magni voluptas ad modi sed ipsam culpa. Ea, quia. Reiciendis autem dolor rerum fuga maxime animi iusto illo, illum recusandae architecto eaque at voluptate modi iure quos, id repudiandae! Ipsa exercitationem velit possimus praesentium, laboriosam amet facere eligendi, suscipit autem officia in optio quos ratione aperiam deserunt illo provident accusamus culpa distinctio veniam consectetur vero! Nemo eveniet nesciunt neque, quae illo ad repellendus hic iste incidunt omnis quo quis praesentium ea blanditiis dicta, aliquid fuga recusandae nam nostrum minima tempora quia eligendi! Dolorum modi recusandae non et porro perferendis eveniet, consequatur deleniti inventore nesciunt! Aperiam hic beatae eligendi necessitatibus quod. Adipisci ducimus ipsa quos autem deserunt consectetur, quas ut, dignissimos dolorem architecto cupiditate quasi distinctio possimus cumque ab, omnis excepturi temporibus perferendis nisi unde amet neque. Cupiditate ipsam animi, obcaecati odio, a quo aperiam sit magni mollitia ea deserunt? Quod ipsum quia esse? Facilis quas, excepturi eligendi mollitia, quisquam eius ipsam laboriosam, aspernatur voluptatibus quod ullam molestias voluptates doloremque quae? Rem ipsam cumque quaerat dolor sapiente dolorum hic tempore culpa? Quasi est porro alias, pariatur sint dicta tempore rem sit eius velit ipsa fuga hic in iusto assumenda numquam adipisci error asperiores unde facilis dolor quo doloribus ratione illo? Corrupti illo consectetur, illum facilis veniam est quidem hic dignissimos aspernatur maiores voluptatum labore mollitia numquam quibusdam ut, culpa vitae quo cum? Odit veritatis ut, aut perferendis consequuntur nostrum rem cupiditate dolorum, maxime laudantium sapiente amet sunt enim ea, pariatur quis at architecto perspiciatis neque repellendus? Voluptatem fugiat vitae enim necessitatibus optio maiores ducimus consequuntur rem architecto aliquam laborum sint nostrum sapiente, suscipit modi error quam eligendi rerum nobis? Voluptatibus in id recusandae, qui placeat molestias ipsa deleniti exercitationem nihil architecto. Dolorum suscipit obcaecati voluptas tempora aperiam iure quibusdam, sequi ex ad optio hic amet dicta sint et dolores architecto officia veritatis quo quisquam? Facilis, saepe. Error non adipisci eligendi laudantium officia possimus dolor suscipit rem quibusdam, ex, quae in voluptas nulla necessitatibus dolores omnis impedit unde illo iste. Fugiat consectetur nulla, itaque, odio vero velit corrupti maxime necessitatibus aliquid, quas ab pariatur autem quae? Esse consequuntur rerum soluta commodi vel, iste, necessitatibus officiis illum impedit, aspernatur omnis?
        </div>
      </div>
      <Button variant={'outline'}>
        Close
      </Button>
    </>
  ),
};



