import type { Preview } from '@storybook/react-vite'
import React from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

// Define Material UI themes you want to showcase in Storybook
const lightTheme = createTheme({
  palette: { mode: 'light' },
})

const darkTheme = createTheme({
  palette: { mode: 'dark' },
})

// Expose a toolbar control to switch themes at runtime
export const globalTypes = {
  muiTheme: {
    name: 'Theme',
    description: 'Material UI Theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
      dynamicTitle: true,
    },
  },
}

const themes: Record<string, ReturnType<typeof createTheme>> = {
  light: lightTheme,
  dark: darkTheme,
}

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const selected = (context.globals as any)?.muiTheme ?? 'light'
      const theme = themes[selected] ?? lightTheme
      return React.createElement(
        ThemeProvider,
        { theme },
        React.createElement(CssBaseline, null),
        React.createElement(Story, null)
      )
    },
  ],
  parameters: {
    // You can sync backgrounds with your themes if desired
    backgrounds: {
      default: 'storybook-default',
      values: [
        { name: 'storybook-default', value: '#ffffff' },
        { name: 'dark-bg', value: '#121212' },
      ],
    },
    options: {
      storySort: {
        order: ['Components', 'Pages'],
      },
    },
  },
}

export default preview
