import type { Meta, StoryObj } from '@storybook/react';
import { Datepicker } from '../datepicker-2';

const meta: Meta<typeof Datepicker> = {
  title: 'Components/Datepicker2',
  component: Datepicker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Select date',
  },
};

export const Inline: Story = {
  args: {
    inline: true,
  },
};

export const WithMinMax: Story = {
  args: {
    minDate: new Date(2024, 0, 10),
    maxDate: new Date(2024, 0, 20),
  },
};

export const MondayFirst: Story = {
  args: {
    weekStart: 1,
  },
};

export const Localized: Story = {
  args: {
    localization: {
      language: 'fr-FR',
      labelTodayButton: 'Aujourd\'hui',
      labelClearButton: 'Effacer',
    },
  },
}; 