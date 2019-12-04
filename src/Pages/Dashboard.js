import React from 'react';
import SiteContent from '@components/Layout/SiteContent';
import CardGrid from '@components/Grids/CardGrid';
import { connect } from 'react-redux';
import ChartGrid from 'Components/Grids/ChartGrid';


function Dashboard(props) {

    return (
        <SiteContent title="Dashboard" >
            <CardGrid dataContent={props.cardContent} />
            <ChartGrid dataContent={props.chartContent} />
        </SiteContent>
    )
}


const mapStateToProps = state => {
    return { 
        cardContent: state.cardContent,
        chartContent: state.chartContent
     };
};

export default connect(mapStateToProps)(Dashboard);