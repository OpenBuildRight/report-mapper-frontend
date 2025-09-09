import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import PhotoUpload from './PhotoUpload'
import { fn } from 'storybook/test'
import {createTheme, ThemeProvider} from "@mui/material";

// Helper to turn a static asset URL into a File object
async function urlToFile(url: string, name: string, type?: string): Promise<File> {
  const res = await fetch(url)
  const blob = await res.blob()
  return new File([blob], name, { type: type || blob.type })
}

// Static asset URLs served by Storybook (see .storybook/main.ts staticDirs)
const assetUrls = [
  new URL('../../storybook-assets/Bush-dog.jpg', import.meta.url).toString(),
  new URL('../../storybook-assets/DSCN0614_small.jpg', import.meta.url).toString(),
  new URL('../../storybook-assets/Bloated-Hero.jpg', import.meta.url).toString(),
  new URL('../../storybook-assets/dsc_09827.jpg', import.meta.url).toString(),
]

// Build a Map<string, File> asynchronously from URLs
const assetFilesPromise: Promise<Map<string, File>> = (async () => {
  try {
    const entries = await Promise.all(
      assetUrls.map(async (url) => {
        const name = url.split('/').pop() || 'image.jpg'
        const file = await urlToFile(url, name)
        return [name, file] as [string, File]
      })
    )
    return new Map(entries)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('Failed to prepare image files for story:', e)
    return new Map()
  }
})()

const meta: Meta<typeof PhotoUpload> = {
  component: PhotoUpload,
}

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    files: new Map(),
    setFiles: fn(),
    onUploadClick: fn(),
  },
}



export const WithPhotos: Story = {
  // Loader supplies files Map; we consume it via the story context to keep the story stateless
  loaders: [async () => ({ files: await assetFilesPromise })],
  render: (_args, { loaded }) => (
        <PhotoUpload
          files={(loaded as any)?.files ?? new Map<string, File>()}
          setFiles={fn()}
          onUploadClick={fn()}
        />
  ),
}

export default meta;
