import type { Meta, StoryObj } from '@storybook/react';
import { CustomSelect, OptionType } from '.';

const meta: Meta<typeof CustomSelect> = {
  title: 'Components/Select',
  component: CustomSelect,
  tags: ['autodocs'],
  argTypes: {
    isDisabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof CustomSelect>;

const options: OptionType[] = [
  { value: 'option1', label: 'Опция 1' },
  { value: 'option2', label: 'Опция 2' },
  { value: 'option3', label: 'Опция 3' },
];

// Базовая история
export const Default: Story = {
  args: {
    options,
    placeholder: 'Выберите опцию...',
  },
};

// Заблокированный Select
export const Disabled: Story = {
  args: {
    options,
    isDisabled: true,
    placeholder: 'Заблокировано',
  },
};

// С предвыбранным значением
export const WithDefaultValue: Story = {
  args: {
    options,
    defaultValue: options[1],
  },
};