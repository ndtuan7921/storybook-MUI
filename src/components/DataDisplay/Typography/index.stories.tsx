import type { Meta, StoryObj } from "@storybook/react";
import Typography from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Data Display/Typography",
  component: Typography,
  tags: ["autodocs"],
  //   args: {
  //     // variant:
  //   }
  argTypes: {
    variant: {
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "inherit",
        "overline",
        "subtitle1",
        "subtitle2",
      ],
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    variant: "body1",
    text: "this is text",
  },
};
