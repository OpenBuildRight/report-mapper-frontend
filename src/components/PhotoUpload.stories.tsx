import type { Meta, StoryObj } from '@storybook/react-vite'

import PhotoUpload from './PhotoUpload'

const meta: Meta<typeof PhotoUpload> = {
    component: PhotoUpload
}

type Story = StoryObj<typeof meta>

function mockOnChange(props: {files: File[]}) {}

export let Primary: Story;
Primary = {
    args: {
        onChange: mockOnChange
    }
}

export default meta;
