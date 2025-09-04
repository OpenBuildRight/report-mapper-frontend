import React from 'react'
import {Drawer, List, ListItem} from "@mui/material";
import Button from "@mui/material/Button";

interface RouteDrawerRoute {
    displayName: string
    path: string
}

interface RouteDrawerProps {
    routes?: RouteDrawerRoute[];
    isOpen: boolean;
    onClose: () => void;
}

const RouteDrawer: React.FC<RouteDrawerProps> = (
    {
        routes = [{
            displayName: "Home",
            path: "/"
        },],
        isOpen,
        onClose,
    }
) => {
    const routesList = routes.map((route, index) =>
        <ListItem key={index}>
                <Button
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={onClose}
                    onKeyDown={onClose}
                    href={route.path}
                >
                        {route.displayName}
                </Button>
        </ListItem>
    )
    return (
        <Drawer
            open={isOpen}
            onClose={onClose}
            anchor="left"
        >
                <List>
                    {routesList}
                </List>
        </Drawer>
    )
}

export default RouteDrawer;
