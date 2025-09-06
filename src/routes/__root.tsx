import {Outlet, createRootRoute} from '@tanstack/react-router'
import {TanStackRouterDevtoolsPanel} from '@tanstack/react-router-devtools'
import {TanstackDevtools} from '@tanstack/react-devtools'
import HeaderNav from '../components/HeaderNav'
import {createTheme, ThemeProvider} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export const Route = createRootRoute({
    component: () => (
        <>
            <ThemeProvider theme={darkTheme}>
            <HeaderNav/>
            <Outlet/>
            <TanstackDevtools
                config={{
                    position: 'bottom-left',
                }}
                plugins={[
                    {
                        name: 'Tanstack Router',
                        render: <TanStackRouterDevtoolsPanel/>,
                    },
                ]}
            />
            </ThemeProvider>
        </>
    ),
})
