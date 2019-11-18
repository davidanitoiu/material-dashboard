import React from 'react';
import SiteContent from '@components/SiteContent/SiteContent';
import CardGrid from '@components/CardGrid/CardGrid';
import cardContent from '@json/cardContent.json';
import Map from '@components/Map/Map';

export default function Dashboard() {
    return (
        <SiteContent title="Dashboard">
            <CardGrid dataContent={cardContent} />
            <Map />
        </SiteContent>
    );
}
