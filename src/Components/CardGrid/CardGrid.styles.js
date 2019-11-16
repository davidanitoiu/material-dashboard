import { makeStyles } from '@material-ui/core/styles';

const width = 240;

export default makeStyles(({
    cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        maxWidth: `calc(100% - ${width}px)`,
        marginLeft: width,
        marginRight: 0,
        marginTop: 50,
        boxSizing: 'content-box',
    },
    card: {
        overflow: 'visible',
        flex: '0 1 21%',
        padding: 15,
        margin: '15px 0'
    },
    cardContent: { 
        display: 'flex', 
        padding: '0 16px 16px 0'
    },
    avatar: {
        padding: 20,
        marginTop: -30,
        borderRadius: 3,
        color: 'white',
    }
}));