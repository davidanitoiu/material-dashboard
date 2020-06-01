import React from 'react';
import { Grid } from '@material-ui/core';
import ChartCard from '@components/Cards/ChartCard';
import useStyles from './ChartGrid.styles';

function ChartGrid(props) {
    const classes = useStyles();

    return (
        <Grid className={classes.cardContainer}>
            {props.dataContent.map((card, i) => (
                <ChartCard key={i} dataContent={card}/>
            ))}
        </Grid>
    )
}

export default ChartGrid;