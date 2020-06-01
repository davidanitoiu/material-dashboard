import { makeStyles } from '@material-ui/core/styles';

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
    }
}));



