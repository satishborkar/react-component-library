import type { Meta, StoryObj } from '@storybook/react';

import { CopyToClipboardIcon } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: any = {
    title: '@react-slices/CopyToClipboardIcon',
    component: CopyToClipboardIcon,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered'
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        style: { control: 'color' }
    }
} satisfies Meta<typeof CopyToClipboardIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        text: 'Button 001'
    }
};

export const Secondary: Story = {
    args: {
        text: 'Button 002'
    }
};

export const Large: Story = {
    args: {
        text: 'Button 003'
    }
};

export const Small: Story = {
    args: {
        text: 'Button 004'
    }
};
