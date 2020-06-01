import React from 'react';
import { ListItemIcon } from '@material-ui/core';
import { generateIcon } from '@utils/IconGenerator';

const SidebarIcon = ({ icon }) => {
    const Icon = generateIcon(icon);

    return <ListItemIcon><Icon /></ListItemIcon>
}

export default SidebarIcon;
