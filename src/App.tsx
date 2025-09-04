import React from 'react';
import HeaderNav from './components/HeaderNav'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


export default function App() {
  return <Outlet/>;
}

export function Layout({ children }: { children: React.ReactNode }) {
    <div className="App">
        <ThemeProvider theme={darkTheme}>
            <HeaderNav/>
        </ThemeProvider>
    </div>

};
