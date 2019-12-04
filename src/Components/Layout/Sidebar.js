import React from 'react';
import { Drawer, List, ListItem, Divider, ListItemIcon, ListItemText, Icon, MenuItem } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import sidebarTheme from './Sidebar.styles';
import menuList from '@json/menuList.json';
import { useHistory, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { createTheme } from '@utils/ThemeGenerator';

const useStyles = makeStyles({
    drawerPaper: {
        width: 240,
    }
})

function Sidebar(props) {
    const theme = createTheme(props.themeColor);
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
                            <ListItemIcon><Icon className={icon} /></ListItemIcon>
                            <ListItemText color="secondary" primary={title} />
                        </MenuItem>
                    ))}
                </List>
            </Drawer>
        </ThemeProvider >
    )
}

const mapStateToProps = theme => theme;
export default connect(mapStateToProps)(Sidebar);