import { makeStyles } from '@material-ui/core/styles';
import { material } from '@utils/ThemeGenerator';
import Color from 'color';

export default makeStyles(theme => ({
    card: {
        overflow: 'visible',
        flex: '0 1 30%',
        padding: 15,
        margin: '15px 0'
    },
    cardContent: {
        display: 'flex',
        padding: '0 16px 16px 0',
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 5,
    },
    content: {
        backgroundColor: ({ color, colorVariant }) => material(color).palette.primary[colorVariant],
        boxShadow: ({ color, colorVariant }) => `0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px ${Color(material(color).palette.primary[colorVariant]).alpha(.4)}`,
    }
}));



