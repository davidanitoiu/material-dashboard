import { fade, makeStyles } from '@material-ui/core/styles';

const width = 240;

export default makeStyles(theme => ({
    appBar: {
        marginLeft: width,
        backgroundColor: 'transparent',
        boxShadow: 'none',
        flexGrow: 1,
        width: `calc(100% - ${width}px)`,
    },
    toolbar: {
        display: 'flex',
        width: '100%',
    },
    title: {
        fontWeight: 400,
        flexGrow: 3,
        color: theme.palette.text.primary,
    },
    menuControls: {
        display: 'flex',
        flex: 1,
    },
    search: {
        display: 'flex',
        flex: 1,
        position: 'relative',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    inputRoot: {
        color: theme.palette.text.primary,
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 1),
        transition: theme.transitions.create('width'),
        width: '100%',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: fade(theme.palette.primary.dark, 0.15),
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                borderBottomColor: fade(theme.palette.primary.dark, 0.25),
                width: 200,
            },
        },
    }
}));