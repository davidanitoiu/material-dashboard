import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './CardGrid.styles';
import GridCard from './CardGenerator/CardGenerator.js';

export default function CardGrid(props) {
    const classes = useStyles();

    return (
        <Grid className={classes.cardContainer}>
            {props.dataContent.map((card, i) => (
                <GridCard key={i} dataContent={card} />
            ))}
        </Grid>
    )
}