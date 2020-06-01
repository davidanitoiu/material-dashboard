import { CardGrid, ChartGrid } from '@components/grids';
import { SiteContent } from '@components/layout';
import React from 'react';
import { useSelector } from 'react-redux';


function Dashboard(props) {
    const { cardContent, chartContent } = useSelector(state => state);

    return (
        <SiteContent title="Dashboard" >
            <CardGrid dataContent={cardContent} />
            <ChartGrid dataContent={chartContent} />
        </SiteContent>
    )
}

export default Dashboard;
