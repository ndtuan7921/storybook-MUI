import type { Meta, StoryObj } from "@storybook/react";
import DatetimeField from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Input/DatetimeField",
  component: DatetimeField,
  tags: ["autodocs"],
  //   args: {
  //     placeholder: "Tìm kiếm",
  //   },
} satisfies Meta<typeof DatetimeField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
