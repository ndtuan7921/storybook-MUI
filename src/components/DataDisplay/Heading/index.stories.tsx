import type { Meta, StoryObj } from "@storybook/react";
import Heading from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Data Display/Heading",
  component: Heading,
  tags: ["autodocs"],
  //   args: {
  //     // variant:
  //   }
  argTypes: {
    variant: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Display2xl: Story = {
  args: {
    variant: "h1",
    text: "Display 2xl",
  },
};

export const Displayxl: Story = {
  args: {
    variant: "h2",
    text: "Display xl",
  },
};

export const Displaylg: Story = {
  args: {
    variant: "h3",
    text: "Display lg",
  },
};

export const Displaymd: Story = {
  args: {
    variant: "h4",
    text: "Display md",
  },
};

export const Displaysm: Story = {
  args: {
    variant: "h5",
    text: "Display sm",
  },
};

export const Displaysx: Story = {
  args: {
    variant: "h6",
    text: "Display sx",
  },
};
