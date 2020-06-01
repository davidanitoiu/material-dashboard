import React from 'react';
import { Drawer, List, ListItem, Divider, ListItemText, MenuItem } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import sidebarTheme from './Sidebar.styles';
import menuList from '@data/menuList.json';
import { useHistory, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { createTheme } from '@utils/ThemeGenerator';
import SidebarIcon from '../SidebarIcon';

const useStyles = makeStyles({
    drawerPaper: {
        width: 240,
    }
})

function Sidebar() {
    const themeColor = useSelector(state => state.themeColor)
    const theme = createTheme(themeColor);
    const classes = useStyles();
    const history = useHistory();

    return (
        <ThemeProvider theme={sidebarTheme(theme)}>
            <Drawer variant='permanent' classes={{
                paper: classes.drawerPaper,
            }}>
                <List>
                    <ListItem>
                        <ListItemText color="primary" primary={'Admin'} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {menuList.map(({ title, icon, path }, i) => (
                        <MenuItem
                            button
                            key={i}
                            component={Link}
                            to={path}
                            selected={history.location.pathname === path}
                            style={{ margin: 10 }}>
                            <SidebarIcon icon={icon} />
                            <ListItemText color="secondary" primary={title} />
                        </MenuItem>
                    ))}
                </List>
            </Drawer>
        </ThemeProvider >
    )
}

export default Sidebar;