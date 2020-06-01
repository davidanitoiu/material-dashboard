import React from 'react';
import { Grid } from '@material-ui/core';
import { ChartCard } from '@components/cards';
import useStyles from './ChartGrid.styles';
import { useSelector } from 'react-redux';

function ChartGrid() {
    const chartContent = useSelector(state => state.chartContent)
    const classes = useStyles();

    return (
        <Grid className={classes.cardContainer}>
            {chartContent.map((card, i) => (
                <ChartCard key={i} dataContent={card} />
            ))}
        </Grid>
    )
}

export default ChartGrid;
