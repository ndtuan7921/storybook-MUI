import type { Meta, StoryObj } from "@storybook/react";
import Tabs from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    tabOptions: [
      {
        id: "single-VOD",
        label: "VOD Lẻ",
        icon: "youtube",
      },
      {
        id: "series-VOD",
        label: "VOD Bộ",
        icon: "youtube",
      },

      {
        id: "event",
        label: "Event",
        icon: "radio",
      },
      {
        id: "short",
        label: "Short",
        icon: "zap",
      },
      {
        id: "story",
        label: "Story",
        icon: "clock",
      },
    ],
  },
};
