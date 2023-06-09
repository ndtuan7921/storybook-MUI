import type { Meta, StoryObj } from "@storybook/react";
import Table from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Table/Table",
  component: Table,
  tags: ["autodocs"],
  //   args: {
  //     // variant:
  //   }
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Display2xl: Story = {
  args: {},
};
