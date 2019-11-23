import React from 'react';
import { Container, Card, CardContent, CardActions, Typography, Icon, Avatar, Link } from '@material-ui/core';
import { material } from '@utils/ThemeGenerator';
import Color from 'color';
import useStyles from '../CardGrid.styles';

export default function GridCard(props) {
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


function createCardAction({ type, icon, label }) {
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