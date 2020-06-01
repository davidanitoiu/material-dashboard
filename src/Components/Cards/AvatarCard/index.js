import { Avatar, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './AvatarCard.styles';
import CardAction from '../CardAction';
import { generateIcon } from '@utils/generators';

export default function AvatarCard(props) {
    const { color, colorVariant, icon, title, value, unit, action } = props.dataContent;
    const classes = useStyles({ color, colorVariant });
    const Icon = generateIcon(icon);

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Avatar variant="square" className={classes.avatar}>
                    <Icon />
                </Avatar>
                <div>
                    <Typography variant="body2" color="textSecondary" align="right">{title}</Typography>
                    <Typography variant="h3" component="p" className={classes.value} align="right">{value}<small className={classes.unit}>{unit}</small></Typography>
                </div>
            </CardContent>
            <CardActions className={classes.cardFooter}>
                <CardAction {...action} />
            </CardActions>
        </Card>
    )
}
