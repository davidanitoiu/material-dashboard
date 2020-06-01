import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './CardGrid.styles';
import AvatarCard from '@components/Cards/AvatarCard';
import { useSelector } from 'react-redux';

export default function CardGrid() {
    const cardContent = useSelector(state => state.cardContent);
    const classes = useStyles();

    return (
        <Grid className={classes.cardContainer}>
            {cardContent.map((card, i) => (
                <AvatarCard key={i} dataContent={card} />
            ))}
        </Grid>
    )
}