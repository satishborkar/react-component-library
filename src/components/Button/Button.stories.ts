import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: '@react-slices/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered'
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        label: 'Sign up',
        hoverText: 'Register'
    }
};

export const Secondary: Story = {
    args: {
        label: 'Hover me',
        hoverText: 'Thank you!'
    }
};

export const Large: Story = {
    args: {
        label: 'UserName',
        hoverText: 'Log Out'
    }
};

export const Small: Story = {
    args: {
        label: '@react-slices/',
        hoverText: 'components',
        style: {
            background: 'red'
        },
        buttonClassName: 'test001'
    }
};
