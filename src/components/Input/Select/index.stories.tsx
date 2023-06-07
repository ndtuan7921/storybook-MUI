import type { Meta, StoryObj } from "@storybook/react";
import Select from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Input/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    options: [
      {
        id: "unpublished",
        label: "Chưa phát hành",
        backgroundColor: "#f2f4f7",
        textColor: "#364052",
      },
      {
        id: "published",
        label: "Đã phát hành",
        backgroundColor: "#f1f8fe",
        textColor: "#2d5bcc",
      },
      {
        id: "expired",
        label: "Hết hạn",
        backgroundColor: "#FDF6EE",
        textColor: "#A84E20",
      },
    ],
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};
