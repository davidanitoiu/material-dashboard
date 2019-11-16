import { makeStyles } from '@material-ui/core/styles';


const width = 240;

export default makeStyles(theme => ({
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
    avatar: {
        padding: 20,
        marginTop: -30,
        borderRadius: 3,
        color: 'white',
    }
}));