import React from 'react';
import { Link, Icon, Typography } from '@material-ui/core';

export const createCardAction = ({ type, icon, label }) => {
    switch (type) {
        case 'link': return (
            <Link variant="caption" style={{ "display": "flex" }} component="a" >
                <Icon color="error" className={icon} fontSize="small" style={{ padding: "0 5px", marginRight: 5, }} />
                {label}
            </Link>
        )
        default: return (
            <Typography
                color="textSecondary"
                variant="caption"
                style={{ "display": "flex" }}
            >
                <Icon
                    fontSize="small"
                    className={icon}
                    style={{ "padding": "0 5px", marginRight: 5, }}
                />{label}
            </Typography>
        )
    }
};