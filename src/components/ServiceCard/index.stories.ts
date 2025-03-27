import type { Meta, StoryObj } from "@storybook/react";
import { ServiceCard } from ".";

const meta: Meta<typeof ServiceCard> = {
  component: ServiceCard,
  tags: ["autodocs"],
  argTypes: {

  },
};

export default meta;

type Story = StoryObj<typeof ServiceCard>;

export const Primary: Story = {
  args: {

  },
};
