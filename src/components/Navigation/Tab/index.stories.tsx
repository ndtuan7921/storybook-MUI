import type { Meta, StoryObj } from "@storybook/react";
import Tab from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Navigation/Tab",
  component: Tab,
  tags: ["autodocs"],
  args: {
    isActive: false,
  },
  argTypes: {},
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Short: Story = {
  args: {
    id: "short",
    label: "Short",
    icon: "zap",
  },
};
