import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {

  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: "Click me",
    variant: "primary",
  },
};

export const WithOnClick: Story = {
  args: {
    text: "Click me",
    variant: "primary",
    onClick: () => {
      alert("Button clicked!");
      console.log("Button clicked!");
    },
  },
};

export const LoadingButton: Story = {
  args: {
    text: "Loading...",
    loading: true,
  },
};