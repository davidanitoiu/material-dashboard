import { Card, CardActionArea, CardActions, CardContent } from '@material-ui/core';
import React from 'react';
import ChartistGraph from 'react-chartist';
import useStyles from './ChartCard.styles';
import CardAction from '../CardAction';

export default function ChartCard(props) {
    const { graph, action, color, colorVariant } = props.dataContent;
    const classes = useStyles({ color, colorVariant });

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent className={classes.content}>
                    <ChartistGraph
                        className={"ct-octave"}
                        data={graph.data}
                        options={graph.options}
                        type={graph.type} />
                </CardContent>
            </CardActionArea>
            <CardActions>
                <CardAction action={action} />
            </CardActions>
        </Card >
    )
}