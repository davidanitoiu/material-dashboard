import { makeStyles } from '@material-ui/core/styles';
import { material } from '@utils/ThemeGenerator';
import Color from 'color';

export default makeStyles(({
    card: {
        overflow: 'visible',
        flex: '0 1 21%',
        padding: 15,
        margin: '15px 0',
    },
    cardContent: {
        display: 'flex',
        padding: '0 16px 16px 0',
        justifyContent: 'space-between'
    },
    avatar: {
        padding: 20,
        marginTop: -30,
        borderRadius: 3,
        color: 'white',
        backgroundColor: ({ color, colorVariant }) => material(color).palette.primary[colorVariant],
        boxShadow: ({ color, colorVariant }) => `0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px ${Color(material(color).palette.primary[colorVariant]).alpha(.4)}`,
    },
    value: {
        fontWeight: 300,
        fontSize: 26
    },
    unit: {
        fontWeight: 400
    },
    cardFooter: {
        borderTop: '1px solid #bdbdbd'
    }
}));



