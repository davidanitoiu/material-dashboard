export const generateIcon = (iconName) => {
    const prefix = iconName?.substring(0, 2).toLowerCase();

    switch (prefix) {
        case 'ai': return require('react-icons/ai')[iconName];
        case 'bs': return require('react-icons/bs')[iconName];
        case 'di': return require('react-icons/di')[iconName];
        case 'fi': return require('react-icons/fi')[iconName];
        case 'fc': return require('react-icons/fc')[iconName];
        case 'fa': return require('react-icons/fa')[iconName];
        case 'gi': return require('react-icons/gi')[iconName];
        case 'go': return require('react-icons/go')[iconName];
        case 'gr': return require('react-icons/gr')[iconName];
        case 'io': return require('react-icons/io')[iconName];
        case 'md': return require('react-icons/md')[iconName];
        case 'ri': return require('react-icons/ri')[iconName];
        case 'ti': return require('react-icons/ti')[iconName];
        case 'wi': return require('react-icons/wi')[iconName];
        default: return require('react-icons/md')['MdErrorOutline'];
    }
}
