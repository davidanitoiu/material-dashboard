import React from 'react';
import { Card, CardActionArea, CardActions, Grid } from '@material-ui/core';
import { createCardAction } from '@utils/CardUtils/createCardAction';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => {});

function ChartGrid(props) {
    const classes = useStyles();
    return (
        <Grid className={classes.cardContainer}>
            {props.dataContent.map((card, i) => (
                <Card key={i} dataContent={card}>
                    <CardActionArea>

                    </CardActionArea>
                    <CardActions>
                        {createCardAction(card.action)}
                    </CardActions>
                </Card>
            ))}
        </Grid>

    )
}

export default ChartGrid;