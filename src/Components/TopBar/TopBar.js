import React from 'react';
import { Notifications, Dashboard, AccountCircle, Search } from '@material-ui/icons';
import { Container, Typography, AppBar, Toolbar, IconButton, InputBase, InputAdornment, Badge, Menu, MenuItem, Divider } from '@material-ui/core';
import useStyles from './TopBar.styles';

const notifications = [
    "Mike John responded to your email",
    "You have 5 new tasks",
    "You're now friends with Andrew",
    "Another notification",
    "Another one",
];

function isMenuActive(anchorEl, menuName) {
    return (!anchorEl)
        ? false
        : (anchorEl.getAttribute('aria-controls') === menuName)
}

export default function TopBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.title}>
                    {props.title}
                </Typography>
                <Container className={classes.menuControls}>
                    <Container className={classes.search}>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            startAdornment={
                                <InputAdornment position="start">
                                    <Search color="primary" />
                                </InputAdornment>
                            }
                        />
                    </Container>
                    <IconButton edge="end" color="primary" aria-label="dashboard">
                        <Dashboard />
                    </IconButton>
                    <IconButton edge="end" color="primary" aria-label="notifications" aria-haspopup="true" onClick={handleClick} aria-controls="notification-menu">
                        <Badge badgeContent={5} color="error">
                            <Notifications />
                        </Badge>
                    </IconButton>
                    <IconButton edge="end" color="primary" aria-label="profile" aria-haspopup="true" onClick={handleClick} aria-controls="profile-menu">
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="notification-menu"
                        variant="menu"
                        anchorEl={anchorEl}
                        getContentAnchorEl={null}
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                        transformOrigin={{ vertical: "top", horizontal: "center" }}
                        keepMounted
                        open={isMenuActive(anchorEl, 'notification-menu')}
                        onClose={handleClose}>
                        {notifications.map((title, i) =>
                            <MenuItem key={i} onClick={handleClose}>{title}</MenuItem>
                        )}
                    </Menu>
                    <Menu
                        id="profile-menu"
                        variant="menu"
                        anchorEl={anchorEl}
                        getContentAnchorEl={null}
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                        transformOrigin={{ vertical: "top", horizontal: "center" }}
                        keepMounted
                        open={isMenuActive(anchorEl, 'profile-menu')}
                        onClose={handleClose}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Settings</MenuItem>
                        <Divider light />
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Container>
            </Toolbar>
        </AppBar>
    )
}