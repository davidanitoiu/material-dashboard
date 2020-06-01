import React from 'react';
import { Card, CardActionArea, CardActions, CardContent } from '@material-ui/core';
import { createCardAction } from './Helpers/createCardAction';
import ChartistGraph from 'react-chartist';
import Color from 'color';
import useStyles from './ChartCard.styles';
import { material } from '@utils/ThemeGenerator';

export default function ChartCard(props) {
    const { graph, action, color, colorVariant } = props.dataContent;
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent style={{
                    backgroundColor: material(color).palette.primary[colorVariant],
                    boxShadow: `0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px ${Color(material(color).palette.primary[colorVariant]).alpha(.4)}`,
                }}>
                    <ChartistGraph
                        className={"ct-octave"}
                        data={graph.data}
                        options={graph.options}
                        type={graph.type} />
                </CardContent>
            </CardActionArea>
            <CardActions>
                {createCardAction(action)}
            </CardActions>
        </Card >
    )
}