import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Drawer, GlobalStyles, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import Link from '@mui/material/Link';

interface HeaderNavRoute {
    displayName: string
    path: string
}

interface HeaderProps {
    title?: string;
    routes?: HeaderNavRoute[];
}

const HeaderNav: React.FC<HeaderProps> = ({
    title="Report Mapper",
    routes=[{
        displayName: "Home",
        path: "/"},]
}
) => {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
  };
    const routesList = routes.map((route, index) =>
        <ListItem key={index}>
                <Link href={route.path} onClick={toggleDrawer(false)}>
                     {route.displayName}
                </Link>
        </ListItem>
    )
    return (
        <Box sx={{ flexGrow: 1 }} color="inherit">
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        open={open}
                        onClose={toggleDrawer(false)}
                        anchor="left"
                    >
                        <Button sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                            <List>
                                {routesList}
                            </List>
                        </Button>
                    </Drawer>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        { title }
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
        )
}

export default HeaderNav