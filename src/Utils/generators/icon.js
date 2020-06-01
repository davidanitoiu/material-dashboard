export const generateIcon = (iconName) => {
    const prefix = iconName?.substring(0, 2).toLowerCase();

    switch (prefix) {
        case 'fa': return require('react-icons/fa')[iconName];
        case 'md': return require('react-icons/md')[iconName];
        default: return require('react-icons/md')['MdErrorOutline'];
    }
}
