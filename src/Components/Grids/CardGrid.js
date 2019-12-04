import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './CardGrid.styles';
import AvatarCard from '@components/Cards/AvatarCard';

export default function CardGrid(props) {
    const classes = useStyles();

    return (
        <Grid className={classes.cardContainer}>
            {props.dataContent.map((card, i) => (
                <AvatarCard key={i} dataContent={card} />
            ))}
        </Grid>
    )
}