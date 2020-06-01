import React from 'react';
import clsx from 'clsx';
import { Fab, Menu, Typography, CardContent, Container, Switch } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useStyles } from './Settings.styles';
import store from '@store';
import { setPrimaryColor, setAccentColor, toggleDark } from '@store/reducers';
import { FaCog } from 'react-icons/fa';

export const colors = ['purple', 'amber', 'red', 'blue', 'indigo', 'green'];

export default function Settings() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function changePrimaryColor(color) {
        store.dispatch(setPrimaryColor(color));
    }

    function changeAccentColor(color) {
        store.dispatch(setAccentColor(color));
    }

    function switchTheme() {
        store.dispatch(toggleDark());
    }

    return (
        <React.Fragment>
            <Fab aria-label="settings" className={classes.fab} onClick={handleClick} aria-haspopup="true" aria-controls="settings">
                <FaCog />
            </Fab>
            <Menu
                id="settings"
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "center", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <CardContent>
                    <Container>
                        <Typography variant="subtitle2" align="center">Dark Theme</Typography>
                        <Container style={{ display: 'inline-flex', justifyContent: 'space-around', margin: 10 }}>
                            <Switch onChange={switchTheme} />
                        </Container>
                    </Container>
                    <Container>
                        <Typography variant="subtitle2" align="center">Theme Color</Typography>
                        <Container style={{ display: 'inline-flex', justifyContent: 'space-around', margin: 10 }}>
                            {colors.map((color) => (
                                <Skeleton key={color} component="button" variant="circle" width={24} height={24} className={clsx(classes.circle, classes[color])} onClick={changePrimaryColor.bind(this, color)} />
                            ))}
                        </Container>
                    </Container>
                    <Container>
                        <Typography variant="subtitle2" align="center">Accent Color</Typography>
                        <Container style={{ display: 'inline-flex', justifyContent: 'space-around', margin: 10 }}>
                            {colors.map((color) => (
                                <Skeleton key={color} component="button" variant="circle" width={24} height={24} className={clsx(classes.circle, classes[color])} onClick={changeAccentColor.bind(this, color)} />
                            ))}
                        </Container>
                    </Container>
                </CardContent>
            </Menu>
        </React.Fragment >
    )
} 