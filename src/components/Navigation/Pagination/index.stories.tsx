import type { Meta, StoryObj } from "@storybook/react";
import Pagination from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Navigation/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  args: {
    labelRowsPerPage: "Số hàng mỗi trang",
    rowsPerPageOptions: [10, 25, 30, 100],
  },
  argTypes: {},
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 100,
  },
};
