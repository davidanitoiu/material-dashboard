import React from 'react';
import { Container, Card, CardContent, CardActions, Typography, Icon, Avatar } from '@material-ui/core';
import { material } from '@utils/ThemeGenerator';
import Color from 'color';
import useStyles from './AvatarCard.styles';
import {createCardAction} from '@utils/CardUtils/createCardAction';

export default function AvatarCard(props) {
    const { color, colorVariant, icon, title, value, unit, action } = props.dataContent;
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Avatar variant="square" className={classes.avatar} style={{
                    backgroundColor: material(color).palette.primary[colorVariant],
                    boxShadow: `0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px ${Color(material(color).palette.primary[colorVariant]).alpha(.4)}`,
                }}>
                    <Icon className={icon} fontSize="large" style={{ width: 'auto' }} />
                </Avatar>
                <Container style={{ flex: 1, textAlign: 'end', marginRight: -48, }}>
                    <Typography variant="body2" color="textSecondary" component="p">{title}</Typography>
                    <Typography variant="h3" component="h3" style={{ fontWeight: 300, fontSize: 26 }}>{value}<small style={{ fontWeight: 400 }}>{unit}</small></Typography>
                </Container>
            </CardContent>
            <CardActions style={{ borderTop: '1px solid #bdbdbd' }}>
                {createCardAction(action)}
            </CardActions>
        </Card>
    )
}
