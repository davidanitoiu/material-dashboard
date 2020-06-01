import { Link, makeStyles, Typography } from '@material-ui/core';
import { generateIcon } from '@utils/IconGenerator';
import React from 'react';

const useStyles = makeStyles(theme => ({
    icon: {
        color: theme.palette.error.main
    }
}))

const CardAction = ({ type, icon, label }) => {
    const Icon = generateIcon(icon);
    const classes = useStyles();

    return type === 'link'
        ? <Link variant="caption" style={{ "display": "flex" }} component="a" >
            <Icon className={classes.icon} fontSize="small" style={{ padding: "0 5px", marginRight: 5, }} />
            {label}
        </Link>
        : <Typography
            color="textSecondary"
            variant="caption"
            style={{ "display": "flex" }}
        >
            <Icon
                style={{ "padding": "0 5px", marginRight: 5, }}
            />{label}
        </Typography>
};

export default CardAction;
