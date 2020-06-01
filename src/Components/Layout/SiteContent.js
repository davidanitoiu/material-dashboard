import { Settings, TopBar } from '@components/layout';
import React from 'react';

const SiteContent = ({ title, children }) => (
    <>
        <TopBar title={title} />
        <Settings />
        <div style={{ paddingLeft: 240 }}>
            {children}
        </div>
    </ >
)

export default SiteContent;
