import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    data_haserror: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Імʼя",
    id: "1"
  },
};
