import React from 'react';
import SiteContent from '@components/SiteContent/SiteContent';
import CardGrid from '@components/CardGrid/CardGrid';
import { connect } from 'react-redux';

function Dashboard(props) {
    return (
        <SiteContent title="Dashboard">
            <CardGrid dataContent={props.cardContent} />
        </SiteContent>
    );
}

const mapStateToProps = state => {
    return { cardContent: state.cardContent };
};

export default connect(mapStateToProps)(Dashboard);