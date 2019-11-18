import React from 'react';
import clsx from 'clsx';
import { Fab, Icon, Menu, Typography, CardContent, Container } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useStyles } from './Settings.styles';
import store from '@utils/Store';
import { setPrimaryColor } from '@actions/ThemeColor';

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

    function changeColor(color) {
        store.dispatch(setPrimaryColor(color));
    }

    return (
        <React.Fragment>
            <Fab aria-label="settings" className={classes.fab} onClick={handleClick} aria-haspopup="true" aria-controls="settings">
                <Icon className="fas fa-cog" />
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
                    <Typography variant="subtitle2" align="center">Theme Color</Typography>
                    <Container style={{ display: 'inline-flex', justifyContent: 'space-around', margin: 10 }}>
                        {colors.map((color) => (
                            <Skeleton key={color} component="button" disableAnimate={true} variant="circle" width={24} height={24} className={clsx(classes.circle, classes[color])} onClick={changeColor.bind(this, color)} />
                        ))}
                    </Container>
                </CardContent>
            </Menu>
        </React.Fragment >
    )
} 